import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
 type Story = StoryObj<typeof Button>;

export const LargeDark: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const MediumDark: Story = {
  args: {
    size: 'medium',
    children: 'Button',
  },
};

export const SmallDark: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const LargeLightPrimary: Story = {
  args: {
    size: 'large',
    color: 'light-primary',
    children: 'Button',
  },
};

export const LargeLightSecondary: Story = {
  args: {
    size: 'large',
    color: 'light-secondary',
    children: 'Button',
  },
};

export const LargeLightTertiary: Story = {
  args: {
    size: 'large',
    color: 'light-tertiary',
    children: 'Button',
  },
};
