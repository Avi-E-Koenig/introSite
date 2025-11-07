// .storybook/preview.ts
import type { Preview } from '@storybook/nextjs'
import { fn } from 'storybook/test'
import { themes } from 'storybook/theming'   // ⬅️ change this line
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    args: { onClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff', theme: themes.light },
        { name: 'dark',  class: 'dark',  color: '#000000', theme: themes.dark  },
      ],
    },
  },
}

export default preview
