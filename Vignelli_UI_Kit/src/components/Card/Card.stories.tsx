import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Vignelli System/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['Light', 'Dark', 'Brand'] },
    type: { control: 'radio', options: ['Feature', 'Stat', 'Minimal'] },
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
    stat: { control: 'text' },
    ctaLabel: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureLight: Story = { args: { theme: 'Light', type: 'Feature', eyebrow: 'FEATURED', title: 'Design at the speed of thought.', text: 'Clarity over decoration.', ctaLabel: 'READ MORE' } };
export const StatDark: Story = { args: { theme: 'Dark', type: 'Stat', eyebrow: 'COMPONENTS', stat: '12', text: 'Production-ready UI components' } };
export const MinimalBrand: Story = { args: { theme: 'Brand', type: 'Minimal', eyebrow: 'ARTICLE', title: 'The structure of good design.', text: 'Order is not a constraint. It is the canvas.', ctaLabel: 'READ →' } };
