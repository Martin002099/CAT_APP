import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Vignelli System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['Primary', 'Secondary', 'Destructive', 'Ghost'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'Primary', children: 'PRIMARY' } };
export const Secondary: Story = { args: { variant: 'Secondary', children: 'SECONDARY' } };
export const Destructive: Story = { args: { variant: 'Destructive', children: 'DESTRUCTIVE' } };
export const Ghost: Story = { args: { variant: 'Ghost', children: 'GHOST' } };
