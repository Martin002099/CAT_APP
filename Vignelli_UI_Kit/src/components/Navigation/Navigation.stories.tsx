import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta = {
  title: 'Vignelli System/Navigation',
  component: Navigation,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Light', 'Dark'] },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = { args: { theme: 'Dark' } };
export const Light: Story = { args: { theme: 'Light' } };
