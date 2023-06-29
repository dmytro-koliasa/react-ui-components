import { memo } from 'react';
import cn from 'classnames';
import { ImageType } from '@/shared/types/common';
import { GalleryProvider } from './components/GalleryProvider';
import { GalleryActiveSlider } from './components/GalleryActiveSlider';
import { GalleryDesktopGrid } from './components/GalleryDesktopGrid';
import { GalleryMobileSlider } from './components/GalleryMobileSlider';

import styles from './Gallery.module.scss';

interface GalleryProps {
  className?: string;
  images: ImageType[];
}

export const Gallery = memo(({ images, className }:GalleryProps) => (
  <GalleryProvider initImages={images}>
    <div className={cn(styles.root, className)}>
      <GalleryDesktopGrid className={styles.grid} />
      <GalleryMobileSlider className={styles.slider} />
    </div>
    <GalleryActiveSlider />
  </GalleryProvider>
));
