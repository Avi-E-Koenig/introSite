import type { Meta, StoryObj } from '@storybook/nextjs';
import GitHubCalendar from './calendar';

const meta = {
  title: 'GitHub/Calendar',
  component: GitHubCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof GitHubCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
