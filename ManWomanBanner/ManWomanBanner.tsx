import { memo } from 'react';
import cn from 'classnames';
import { ImageType } from '@/shared/types/common';
import { FlexCol } from '@/shared/ui/Flex';
import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import { AppImage } from '@/shared/ui/AppImage';
import { useTranslation } from 'next-i18next';
import styles from './ManWomanBanner.module.scss';

interface ManWomanBannerProps {
  className?: string;
  title: string;
  description: string;
  isPageBanner?: boolean;
  backgroundDesktop: ImageType;
  backgroundMobile: ImageType;
  man: ImageType;
  woman: ImageType;
  manShadow: ImageType;
  womanShadow: ImageType;
  onManButtonClick?: () => void;
  onWomanButtonClick?: () => void;
}

export const ManWomanBanner = memo(({
  className,
  title,
  description,
  isPageBanner = false,
  backgroundDesktop,
  backgroundMobile,
  man,
  woman,
  manShadow,
  womanShadow,
  onManButtonClick,
  onWomanButtonClick,
}: ManWomanBannerProps) => {
  const { t } = useTranslation();
  return (
    <FlexCol
      align="center"
      justify="center"
      className={cn(
        styles.root,
        className,
        { [styles.is_page_banner]: isPageBanner },
      )}
    >
      <div className={styles.bg}>
        <AppImage className={cn(styles.banner, styles.banner_desktop)} alt={title} src={backgroundDesktop} />
        <AppImage className={cn(styles.banner, styles.banner_mobile)} alt={title} src={backgroundMobile} />
        <FlexCol className={cn(styles.title, styles.title_primary)} align="center" gap="8">
          <Typography variant="title-1" as="h2">{title}</Typography>
          <Typography variant="body-2" className={styles.subtitle}>{description}</Typography>
        </FlexCol>
        <div className={styles.images}>
          <div className={cn(styles.img_item, styles.primary)}>
            <div className={cn(
              styles.image_wrap,
              styles.image_wrap_primary,
              { [styles.with_hover]: !isPageBanner },
            )}
            >
              <div className={cn(styles.figure_wrap, styles.figure_wrap_primary)}>
                <div className={styles.shadow_wrap} />
                <AppImage
                  className={cn(
                    styles.man,
                    styles.person,
                    { [styles.is_page_banner]: isPageBanner },
                  )}
                  alt={title}
                  src={man}
                />
                <AppImage
                  className={
                    cn(
                      styles.man_shadow,
                      { [styles.is_page_banner]: isPageBanner },
                    )
                  }
                  alt={title}
                  src={manShadow}
                />
              </div>
            </div>
            <div className={cn(styles.btn_wrap, styles.btn_wrap_primary)}>
              <Button size="large" className={styles.button} onClick={onManButtonClick}>{t('colovikam')}</Button>
            </div>
          </div>

          <div className={styles.content}>
            <FlexCol className={cn(styles.title, styles.title_secondary)} align="center" gap="8">
              <Typography variant="title-1" as="h2" className={styles.heading}>{title}</Typography>
              <Typography variant="body-2" className={styles.subtitle}>{description}</Typography>
            </FlexCol>

            <div className={styles.content_btns}>
              <Button size="large" className={styles.button} onClick={onManButtonClick}>{t('colovikam')}</Button>
              <Button size="large" className={styles.button} onClick={onWomanButtonClick}>{t('zinkam')}</Button>
            </div>
          </div>

          <div className={cn(styles.img_item, styles.secondary)}>
            <div className={cn(
              styles.image_wrap,
              styles.image_wrap_secondary,
              { [styles.with_hover]: !isPageBanner },
            )}
            >
              <div className={cn(styles.figure_wrap, styles.figure_wrap_secondary)}>
                <div className={styles.shadow_wrap} />
                <AppImage
                  className={cn(
                    styles.woman,
                    styles.person,
                    { [styles.is_page_banner]: isPageBanner },
                  )}
                  alt={title}
                  src={woman}
                />
                <AppImage
                  className={cn(
                    styles.woman_shadow,
                    { [styles.is_page_banner]: isPageBanner },
                  )}
                  alt={title}
                  src={womanShadow}
                />
              </div>
            </div>
            <div className={cn(styles.btn_wrap, styles.btn_wrap_secondary)}>
              <Button size="large" className={styles.button} onClick={onWomanButtonClick}>{t('zinkam')}</Button>
            </div>
          </div>
        </div>
      </div>
    </FlexCol>
  );
});
