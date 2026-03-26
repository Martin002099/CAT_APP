import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Vignelli System/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['Featured', 'New', 'Sale', 'Sold Out', 'Active', 'Draft'] },
    state: { control: 'radio', options: ['Default', 'Disabled'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Featured: Story = { args: { type: 'Featured' } };
export const Disabled: Story = { args: { type: 'Featured', state: 'Disabled' } };
