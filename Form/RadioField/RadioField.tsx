import { memo } from 'react';
import { Radio } from '@/shared/ui/Form/Radio';
import { ErrorMessage } from '@/shared/ui/Form/ErrorMessage';
import styles from './RadioField.module.scss';

export interface RadioOption {
  value: string;
  label?: string;
  disabled?: boolean;
}

interface RadioFieldProps {
  className?: string;
  options: RadioOption[];
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string) => void;
  error?: string;
}

export const RadioField = memo(({
  name,
  className,
  value,
  onChange,
  onBlur,
  error,
  options = [],
}: RadioFieldProps) => (
  <div className={className}>
    <div className={styles.list}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={option.value === value}
          onChange={onChange}
          onBlur={onBlur}
          label={option.label}
          disabled={option.disabled}
        />
      ))}
    </div>
    {error && <ErrorMessage error={error} />}
  </div>
));
