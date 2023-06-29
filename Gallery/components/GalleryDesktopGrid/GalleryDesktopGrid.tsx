import { memo } from 'react';
import cn from 'classnames';
import { AppImage } from '@/shared/ui/AppImage';
import { Typography } from '@/shared/ui/Typography';
import { Svg } from '@/shared/ui/Svg';
import ArrowRightDownIcon from '@/shared/assets/icons/arrow-r-d.svg';
import { useTranslation } from 'next-i18next';
import styles from './GalleryDesktopGrid.module.scss';
import { useGallery } from '../../lib/useGallery';

interface GalleryDesktopGridProps {
  className?: string;
}

export const GalleryDesktopGrid = memo(({ className }: GalleryDesktopGridProps) => {
  const {
    images,
    openGallery,
  } = useGallery();
  const { t } = useTranslation();
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.grid}>
        {images.slice(0, 4)
          .map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <button onClick={() => openGallery(index)} key={index} className={styles.item}>
              <div className={styles.imageWrap}>
                <AppImage lazy className={styles.img} unoptimized alt="image" src={image} />
              </div>
            </button>
          ))}
      </div>
      {images.length > 4
        && (
          <Typography as="button" variant="body-2" className={styles.btn} onClick={() => openGallery(0)}>
            {t('more_photos')}
            {' '}
            <Svg Icon={ArrowRightDownIcon} />
          </Typography>
        )}
    </div>
  );
});
