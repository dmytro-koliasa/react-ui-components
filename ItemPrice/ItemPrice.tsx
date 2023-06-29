import { memo } from 'react';
import { Flex } from '@/shared/ui/Flex';
import { Typography } from '@/shared/ui/Typography';
import styles from './ItemPrice.module.scss';

interface ItemPriceProps {
  className?: string;
  price: string;
  discountPrice?: string | null;
  variant?: 'normal' | 'search';
}

export const ItemPrice = memo(({
  price, discountPrice, className, variant,
}: ItemPriceProps) => (
  <Flex align="baseline" gap="8" className={className}>
    <Typography
      variant="body-2"
      color={discountPrice ? 'red' : 'grey-dark'}
    >
      {discountPrice || price}

    </Typography>
    {discountPrice && (
      <Typography
        variant={variant === 'search' ? 'body-2' : 'body-3'}
        className={styles.discountPrice}
        color="#818181"
      >
        {price}
      </Typography>
    )}
  </Flex>
));
