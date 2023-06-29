import { memo } from 'react';
import cn from 'classnames';
import { Flex } from '@/shared/ui/Flex';
import { Typography } from '@/shared/ui/Typography';
import { ColorOption } from '@/shared/ui/ColorPicker/ColorOption';
import { useTranslation } from 'next-i18next';
import styles from './ColorPicker.module.scss';

interface ColorPickerProps {
  className?: string;
  direction?: 'row' | 'column';
  colors: string[];
  activeColor: string;
  onColorChange: (color: string) => void;
  withTitle?: boolean;
}

export const ColorPicker = memo(({
  className, direction = 'row', withTitle, colors = [], onColorChange, activeColor,
}: ColorPickerProps) => {
  const { t } = useTranslation();
  return (
    <Flex direction={direction} align={direction === 'column' ? 'start' : 'center'} gap={direction === 'column' ? '8' : '10'} className={cn(styles.root, className)}>
      {withTitle && (
        <Typography variant="body-3">
          {t('color')}
          :
          {' '}
        </Typography>
      )}
      <Flex gap="8" align="center">
        {colors.map((color) => (
          <ColorOption
            key={color}
            color={color}
            onClick={() => onColorChange(color)}
            active={activeColor === color}
          />
        ))}
      </Flex>
    </Flex>
  );
});
