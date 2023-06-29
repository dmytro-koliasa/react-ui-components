import { FC } from 'react';
import cn from 'classnames';
import RCPagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/ru_RU';
import ChevronLeftIcon from '@/shared/assets/icons/arrow-left.svg';
import ChevronRightIcon from '@/shared/assets/icons/arrow-right.svg';
import { Svg } from '@/shared/ui/Svg';
import { PageControl } from './PageControl';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
  activePage: number;
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({
  className,
  pageCount,
  onPageChange,
  activePage,
}) => {
  if (pageCount <= 1) return null;

  return (
    <RCPagination
      current={activePage}
      pageSize={1}
      onChange={onPageChange}
      total={pageCount}
      locale={localeInfo}
      itemRender={(page, type) => {
        if (type === 'jump-next' || type === 'jump-prev') {
          return (
            <PageControl>
              ...
            </PageControl>
          );
        }
        if (type === 'prev') {
          const disabled = activePage === 1;
          return (
            <PageControl className="mr-15" disabled={disabled}>
              <Svg Icon={ChevronLeftIcon} width={6} height={12} stroke={disabled ? 'grey' : 'black'} />
            </PageControl>
          );
        }
        if (type === 'next') {
          const disabled = activePage === pageCount;
          return (
            <PageControl className="ml-15" disabled={disabled}>
              <Svg Icon={ChevronRightIcon} width={6} height={12} stroke={disabled ? 'grey' : 'black'} />
            </PageControl>
          );
        }
        if (type === 'page') {
          return (
            <PageControl
              isActive={activePage === page}
              key={page}
              onClick={() => onPageChange?.(page)}
            >
              {page}
            </PageControl>
          );
        }
        return null;
      }}
      className={cn(styles.root, className)}
    />
  );
};
