import { memo, ReactElement, ReactNode } from 'react';
import cn from 'classnames';
import { AppImage } from '@/shared/ui/AppImage';
import { Typography } from '@/shared/ui/Typography';
import { CardView, ImageType } from '@/shared/types/common';
import Link from 'next/link';
import styles from './Card.module.scss';

export interface CardProps {
  className?: string;
  classes?: {
    title?: string;
    footerWrap?: string;
  }
  image?: ImageType | null;
  hoverImage?: ImageType | null;
  title?: string;
  label?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  view?: CardView;
  href?: string;
  hoverContent?: ReactElement | null;
  hoverBehavior?: 'slide' | 'fade';
}

export const Card = memo(({
  className,
  classes,
  image,
  title = '',
  label,
  actions,
  footer,
  hoverContent,
  href = '',
  hoverBehavior = 'slide',
  view = CardView.NORMAL,
  hoverImage,
}:CardProps) => (
  <div className={cn(styles.root, { [styles.hasHoverImage]: Boolean(hoverImage) }, className)}>
    <div className={styles.wrap}>
      <Link href={href} className={styles.image}>
        <AppImage
          className={cn(styles.image, styles.primaryImage)}
          src={image}
          unoptimized
          alt={title}
          lazy
        />
        {hoverImage
          && (
            <AppImage
              className={styles.hoverImage}
              src={hoverImage}
              unoptimized
              alt={title}
              lazy
            />
          )}
      </Link>
      {label && <div className={styles.label}>{label}</div>}
      {actions && <div className={cn(styles.actions, styles[view])}>{actions}</div>}
    </div>
    {view !== CardView.SMALL
      && (
        <div className={cn(styles.footerWrap, classes?.footerWrap)}>
          {hoverContent && (
            <div className={cn(styles.hoverContent, styles[hoverBehavior])}>
              {hoverContent}
            </div>
          )}
          <Typography variant="body-2" color="black" className={cn(styles.title, classes?.title)}>
            {title}
          </Typography>
          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      )}
  </div>
));
