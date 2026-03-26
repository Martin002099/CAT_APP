import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
  title: 'Vignelli System/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['Notice', 'Error', 'Success', 'Info'] },
    isDismissed: { control: 'boolean' },
    message: { control: 'text' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notice: Story = { args: { variant: 'Notice', message: 'Token update applied successfully.', onDismiss: () => alert('dismissed') } };
export const Error: Story = { args: { variant: 'Error', message: 'Validation failed. Review bindings.' } };
export const Dismissed: Story = { args: { variant: 'Notice', message: 'Message', isDismissed: true } };
