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
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'loading-dot': 'loadingDots 1.4s infinite',
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
          100: '#5198FB',
          200: '#066CF9',
          300: '#2980FA',
          400: '#12386E',
          500: '#114997',
          600: '#0C57C1',
        },
        gray: {
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#E5E5E5',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
        },
        /*        primary: {
          400: '#B84B44',
          500: '#A0222A',
          600: '#8A1D23',
        },
        gray: {
          400: '#A48170',
          500: '#937056',
          600: '#815F4C',
        },*/
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
