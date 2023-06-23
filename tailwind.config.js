const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'flip-card': {
          '0%': {
          },
          '100%': {
            color: '#ffffff',
            transform: 'rotateY(0)'
          }
        }
      },
      animation: {
        'flip-card': 'flip-card 300ms linear forwards'
      },
      colors: {
        main: '#112B3C',
        'main-light': '#205375',
        'main-dark': '#0B1C27',
        'accent': '#F66B0E',
        'custom-white': '#EFEFEF'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
