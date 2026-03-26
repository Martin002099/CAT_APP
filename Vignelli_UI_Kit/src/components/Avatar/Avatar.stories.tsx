import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Vignelli System/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['Small', 'Medium', 'Large'] },
    theme: { control: 'radio', options: ['Brand', 'Dark', 'Light', 'Outline'] },
    initials: { control: 'text' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumBrand: Story = { args: { size: 'Medium', theme: 'Brand', initials: 'MV' } };
export const SmallOutline: Story = { args: { size: 'Small', theme: 'Outline', initials: 'MV' } };
export const LargeDark: Story = { args: { size: 'Large', theme: 'Dark', initials: 'MV' } };
