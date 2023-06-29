import { memo, ReactNode } from 'react';
import cn from 'classnames';
import { Typography } from '@/shared/ui/Typography';
import styles from './PageControl.module.scss';

interface PageControlProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

export const PageControl = memo(({
  className, children, isActive, onClick, disabled,
}: PageControlProps) => {
  const clickHandler = () => {
    if (disabled) return;
    onClick?.();
  };
  const mods = {
    [styles.active]: isActive,
    [styles.disabled]: disabled,
  };
  return (
    <Typography as="button" variant="body-3" onClick={clickHandler} className={cn(styles.root, mods, className)}>
      {children}
    </Typography>
  );
});
