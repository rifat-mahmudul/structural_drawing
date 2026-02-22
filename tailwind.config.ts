import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#dcfce7',
        },
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#0f2240',
        },
      },
      fontFamily: {
        hind: ['var(--font-hind)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
