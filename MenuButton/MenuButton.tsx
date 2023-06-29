import cn from 'classnames';
import HamburgerIcon from '@/shared/assets/icons/hamburger.svg';
import { Svg } from '@/shared/ui/Svg';
import { SvgType } from '@/shared/types/common';
import styles from './MenuButton.module.scss';

export interface MenuButtonProps {
  className?: string;
  onClick?: () => void;
  Icon?: SvgType;
}

export const MenuButton = ({
  className, onClick, Icon = HamburgerIcon, ...rest
}: MenuButtonProps) => (
  <button className={cn(styles.root, className)} onClick={onClick}>
    <Svg Icon={Icon} width="24" height="24" stroke="black-light-2" {...rest} />
  </button>
);
