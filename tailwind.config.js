// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        loadingDots: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        },
        'move-grid': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-200px 0px' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #636161 1px, transparent 1px),
          linear-gradient(to bottom, #636161 1px, transparent 1px)`,
      },
      // Add custom background sizes
      backgroundSize: {
        'grid-sm': '100px 100px',
        'grid-lg': '200px 200px',
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'loading-dot': 'loadingDots 1.4s infinite',
        'move-grid': 'move-grid 8s linear infinite 2s',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#EBF8FF',
          200: '#BEE3F8',
          300: '#63B3ED',
          400: '#4299E1',
          500: '#3182CE',
          600: '#0C57C1',
          700: '#0A4361',
          800: '#2C5282',
        },
        gray: {
          50: '#fafafa',
          100: '#ececec',
          200: '#dcdcdc',
          300: '#c5c5c5',
          400: '#a2a2a2',
          500: '#7f7f7f',
          600: '#686868',
          700: '#515151',
          800: '#3a3a3a',
          900: '#171717',
          950: '#0c0c0c',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
