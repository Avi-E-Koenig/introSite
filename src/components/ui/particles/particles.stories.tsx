import type { Meta, StoryObj } from '@storybook/nextjs';
import Particle from './index';

const meta = {
  title: 'UI/Particles',
  component: Particle,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-screen bg-purple-400">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Particle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
