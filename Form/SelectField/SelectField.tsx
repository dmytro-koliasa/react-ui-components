import cn from 'classnames';
import Select from 'react-select';
import { useId } from 'react';
import { Label } from '@/shared/ui/Form/Label';
import { ErrorMessage } from '@/shared/ui/Form/ErrorMessage';
import { Option as OptionComponent } from './components/Option';
import { isValueEmpty } from './utils/isValueEmpty';
import styles from './SelectField.module.scss';
import { OnChangeSingle, SelectFieldProps, SingleSelectOption } from './types/types';
import { getSelectedOption } from './utils/getSelectedOption';
import { selectClassNames } from './styles/styles';

export const SelectField = <Option extends SingleSelectOption>(props: SelectFieldProps<Option>) => {
  const {
    name,
    value,
    onChange,
    onBlur,
    options,
    disabled,
    label,
    error,
    className,
    ...rest
  } = props;
  const fieldId = useId();
  const changeHandler:OnChangeSingle<Option> = (newValue) => {
    if (newValue) {
      onChange(name, newValue.value);
    }
  };

  const blurHandler = () => {
    onBlur?.(name);
  };

  const selectedValue = isValueEmpty(value) ? null : getSelectedOption(value, options);

  return (
    <div className={cn(styles.root, className)}>
      {label && (
        <Label
          className={cn(styles.label)}
          htmlFor={fieldId}
        >
          {label}
        </Label>
      )}
      <Select
        classNamePrefix={styles.prefix}
        classNames={selectClassNames<Option>(!!error)}
        onChange={changeHandler}
        onBlur={blurHandler}
        isMulti={false}
        blurInputOnSelect
        noOptionsMessage={() => 'Нет результатов'}
        value={isValueEmpty(value) ? null : selectedValue}
        name={name}
        id={fieldId}
        isDisabled={disabled}
        options={options}
        hideSelectedOptions={false}
        components={{
          Option: OptionComponent,
        }}
        {...rest}
      />
      {error && (
        <ErrorMessage error={error} />
      )}
    </div>
  );
};
