import cn from 'classnames';
import styles from './PageLoader.module.scss';
import { Loader } from '../Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }:PageLoaderProps) => (
  <div className={cn(styles.root, className)}>
    <Loader className={styles.loader} />
  </div>
);
