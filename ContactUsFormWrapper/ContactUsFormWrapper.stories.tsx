import type { Meta, StoryObj } from '@storybook/react';
import { ContactUsFormWrapper } from './ContactUsFormWrapper';

const meta: Meta<typeof ContactUsFormWrapper> = {
  title: 'shared/ContactUsFormWrapper',
  component: ContactUsFormWrapper,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContactUsFormWrapper>;

export const ContactUsFormWrapperDefault: Story = {

};
