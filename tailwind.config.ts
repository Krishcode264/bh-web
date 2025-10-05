import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if using app directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // example custom color
        secondary: '#F59E0B',
      },
      spacing: {
        128: '32rem',
      },
      screens: {
        'mb': '650px',
      },
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
