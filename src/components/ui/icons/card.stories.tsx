import type { Meta, StoryObj } from '@storybook/nextjs';
import IconCard from './card';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from 'react-icons/di';

const meta = {
  title: 'UI/Icons/Card',
  component: IconCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-8 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta<typeof IconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// JavaScript Icon Stories
export const JavaScriptLight: Story = {
  args: {
    icon: <DiJavascript1 />,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
  },
};

export const JavaScriptDark: Story = {
  args: {
    icon: <DiJavascript1 />,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
  },
};

// React Icon Stories
export const ReactLight: Story = {
  args: {
    icon: <DiReact />,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
  },
};

export const ReactDark: Story = {
  args: {
    icon: <DiReact />,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
  },
};

// Node.js Icon Stories
export const NodeLight: Story = {
  args: {
    icon: <DiNodejs />,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
  },
};

export const NodeDark: Story = {
  args: {
    icon: <DiNodejs />,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
  },
};

// MongoDB Icon Stories
export const MongoLight: Story = {
  args: {
    icon: <DiMongodb />,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    darkMode: {
      current: 'light',
    },
  },
};

export const MongoDark: Story = {
  args: {
    icon: <DiMongodb />,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    darkMode: {
      current: 'dark',
    },
  },
};