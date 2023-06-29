import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'shared/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const ColorPickerDefault: Story = {
  args: {
    colors: ['#9578AB', '#232323', '#DBDBDB', '#E8A782', '#94A3D5'],
    activeColor: '#9578AB',
  },
};
