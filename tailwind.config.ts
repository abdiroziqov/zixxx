import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/composables/**/*.{js,ts}',
    './src/assets/**/*.css',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue',
    './src/error.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto', 'Futura PT'"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
        screens: ['1320px'],
      },
      backgroundImage: {
        radial:
            'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.00) 100%)',
      },
      colors: {
        orange: {
          DEFAULT: '#FF662D',
        },
        dark: {
          DEFAULT: '#232429',
        },
        gray: {
          DEFAULT: '#3A3B3F',
          100: '#00152b',
        }, theme: {
          DEFAULT: '#F7F8FA',
        },
      },

      lineHeight: {
        120: '120%',
        130: '130%',
        136: '136%',
        140: '140%',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
      },
      boxShadow: {
        mapCard: '0px 10px 24px 0px rgba(0, 0, 0, 0.12)',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },

  plugins: [],
} satisfies Config
