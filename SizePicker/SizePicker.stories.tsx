import type { Meta, StoryObj } from '@storybook/react';
import { MOCK_SIZES } from '@/shared/constants/mockData';
import { SizePicker } from './SizePicker';

const meta: Meta<typeof SizePicker> = {
  title: 'shared/SizePicker',
  component: SizePicker,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SizePicker>;

export const SizePickerDefault: Story = {
  args: {
    sizes: MOCK_SIZES,
    activeSize: 'S',
  },
};
