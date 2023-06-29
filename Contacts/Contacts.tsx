import { memo } from 'react';
import cn from 'classnames';
import { Svg } from '@/shared/ui/Svg';
import { Typography } from '@/shared/ui/Typography';
import { SocialsMenu } from '@/shared/ui/SocialsMenu';
import PhoneIcon from '@/shared/assets/icons/phone-3.svg';
import EmailIcon from '@/shared/assets/icons/envelope-2.svg';
import ClockIcon from '@/shared/assets/icons/clock-2.svg';
import { socialsHeaderMenu } from '@/shared/constants/menus';
import { useTranslation } from 'next-i18next';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
  variant?: 'normal' | 'contactsPage' | 'faqPage';
}

export const Contacts = memo(({
  className,
  variant = 'normal',
}:ContactsProps) => {
  const { t } = useTranslation('contacts-page');
  return (
    <div className={cn(styles.root, className)}>
      <ul className={styles.list}>
        <li className={cn(styles.item, styles[variant])}>
          <div className={styles.icon_wrap}>
            <Svg Icon={PhoneIcon} />
          </div>
          <div className={styles.content}>
            <Typography variant="body-1" className={styles.title}>{t('contact.tel.text')}</Typography>
            <Typography variant="body-2" className={styles.subtitle}>{t('contact.tel')}</Typography>
          </div>
        </li>
        <li className={cn(styles.item, styles[variant])}>
          <div className={styles.icon_wrap}>
            <Svg Icon={EmailIcon} />
          </div>
          <div className={styles.content}>
            <Typography variant="body-1" className={styles.title}>{t('contact.mail.text')}</Typography>
            <Typography variant="body-2" className={styles.subtitle}>{t('contact.mail')}</Typography>
          </div>
        </li>
        <li className={cn(styles.item, styles[variant])}>
          <div className={styles.icon_wrap}>
            <Svg Icon={ClockIcon} />
          </div>
          <div className={styles.content}>
            <Typography variant="body-1" className={styles.title}>{t('contact.schedule.text')}</Typography>
            <Typography variant="body-2" className={styles.subtitle}>{t('contact.schedule')}</Typography>
          </div>
        </li>
        <li className={cn(styles.item, styles[variant])}>
          <div className={styles.icon_wrap} />
          <div className={styles.content}>
            <Typography variant="body-1" className={styles.title}>{t('contact.social.text')}</Typography>
            <SocialsMenu socials={socialsHeaderMenu} className={styles.socilals} />
          </div>
        </li>
      </ul>
    </div>
  );
});
