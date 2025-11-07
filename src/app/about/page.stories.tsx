import type { Meta, StoryObj } from '@storybook/nextjs';
import AboutPage from './page';

const meta = {
  title: 'App/Pages/About',
  component: AboutPage,
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
} as Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
