import type { Meta, StoryObj } from '@storybook/react';
import CardImage from '@/shared/assets/images/card-test.jpg';
import CardHoverImage from '@/shared/assets/images/seller.jpg';
import { Favourites } from '@/shared/ui/Favourites';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

const qty = 23;

export const CardWithFooter: Story = {
  args: {
    image: CardImage,
    title: 'Мужской Look',
    label: '',
    actions: <div><Favourites quantity={qty} /></div>,
    footer: <div>2 товара</div>,
  },
};

export const CardWithoutFooter: Story = {
  args: {
    image: CardImage,
    title: 'Мужской Look',
    label: '',
    actions: <div><Favourites quantity="23" /></div>,
    footer: '',
  },
};

export const CardWithHoverImage: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Card
        image={CardImage}
        title="Мужской Look"
        hoverImage={CardHoverImage}
      />
    </div>
  ),
};
