import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // GeneralSans-Medium
      fontFamily: {
        sans: ['GeneralSans-Medium', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#1E2A58',
          dark: '#E6E6E6',
        },
        secondary: {
          DEFAULT: '#F29127',
          dark: '#333333',
        },
        accent: {
          DEFAULT: '#FFC700',
          dark: '#E6B800',
        },
        'accent-dark': {
          DEFAULT: '#FFC700',
          dark: '#E6B800',
        },
        'accent-light': {
          DEFAULT: '#FFC700',
          dark: '#E6B800',
        },
        'accent-lighter': {
          DEFAULT: '#FFC700',
          dark: '#E6B800',
        },
        'accent-lightest': {
          DEFAULT: '#FFC700',
          dark: '#E6B800',
        },
      },
      
        
    },
  },
  plugins: [],
}
export default config
