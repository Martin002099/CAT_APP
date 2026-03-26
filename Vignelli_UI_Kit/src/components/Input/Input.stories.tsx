import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Vignelli System/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    inputType: { control: 'radio', options: ['Text', 'Search', 'Password'] },
    state: { control: 'radio', options: ['Default', 'Focused', 'Error', 'Disabled', 'Filled'] },
    label: { control: 'text' },
    errorMessage: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = { args: { inputType: 'Text', label: 'Label', state: 'Default', placeholder: 'Placeholder...' } };
export const Errored: Story = { args: { inputType: 'Text', label: 'Label', state: 'Error', value: 'Invalid', errorMessage: 'Required field' } };
export const Search: Story = { args: { inputType: 'Search', label: 'Search', placeholder: 'Search...' } };
export const Password: Story = { args: { inputType: 'Password', label: 'Password', value: '••••••••' } };
