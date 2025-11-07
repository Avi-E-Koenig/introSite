import type { Meta, StoryObj } from '@storybook/nextjs';
import SkillIconsList from './skill-list';

const meta = {
  title: 'UI/SkillIconsList',
  component: SkillIconsList,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta<typeof SkillIconsList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Light Mode Story
export const Light: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
  },
};

// Dark Mode Story
export const Dark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
  },
};

// Mobile View Story
export const MobileLight: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Mobile Dark Mode Story
export const MobileDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Tablet View Story
export const TabletLight: Story = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

// Tablet Dark Mode Story
export const TabletDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};