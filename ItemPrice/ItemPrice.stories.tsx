import type { Meta, StoryObj } from '@storybook/react';
import { ItemPrice } from './ItemPrice';

const meta: Meta<typeof ItemPrice> = {
  title: 'shared/ItemPrice',
  component: ItemPrice,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ItemPrice>;

export const ItemPriceWithDiscount: Story = {
  args: {
    price: '1000грн',
    discountPrice: '800грн',
  },
};

export const ItemPriceWithoutDiscount: Story = {
  args: {
    price: '1000грн',
  },
};
