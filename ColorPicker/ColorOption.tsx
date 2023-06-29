import { CSSProperties } from 'react';
import cn from 'classnames';
import styles from './ColorPicker.module.scss';

interface ColorOptionProps {
  color: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ColorOption = ({
  className, color, active, onClick,
}: ColorOptionProps) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button
    onClick={onClick}
    style={{ '--color': color } as CSSProperties}
    className={cn(styles.color, { [styles.active]: active }, className)}
  />
);
