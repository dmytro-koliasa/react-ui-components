import type { Meta, StoryObj } from '@storybook/react';
import { ManWomanSwitcherButtons } from './ManWomanSwitcherButtons';

const meta: Meta<typeof ManWomanSwitcherButtons> = {
  title: 'shared/ManWomanSwitcherButtons',
  component: ManWomanSwitcherButtons,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ManWomanSwitcherButtons>;

export const ManWomanSwitcherButtonsDefault: Story = {
  args: {
    chosenTab: 'colovikam',
  },
};
