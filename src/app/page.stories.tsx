import type { Meta, StoryObj } from '@storybook/nextjs';
import HomePage from './page';

const meta = {
  title: 'App/Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <body>
        <Story />
      </body>
    ),
  ],
} as Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
