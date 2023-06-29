import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'mediumlarge' | 'large' | 'xsmall' | 'largexxl';
  color?: 'dark' | 'light-primary' | 'light-secondary' | 'light-tertiary' | 'light-quaternary' | 'light-quinary' | 'transparent' | 'transparent-bg' | 'icon' | 'viber' | 'telegram';
  variant?: 'app' | 'app-small' | 'action' | 'rounded-label' | 'tab';
  active?: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  multiline?: boolean;
}

export const Button = ({
  children,
  size = 'medium',
  color = 'dark',
  className,
  type = 'button',
  variant,
  startIcon,
  endIcon,
  fullWidth,
  active = false,
  multiline = false,
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={cn(
      styles.button,
      styles[`button_size_${size}`],
      styles[`button_color_${color}`],
      styles[`button_${variant}`],
      {
        [styles.fullWidth]: fullWidth,
        [styles.active]: active,
        [styles.multiline]: multiline,
      },
      className,
    )}
    {...rest}
  >
    {startIcon}
    {children}
    {endIcon}
  </button>
);
