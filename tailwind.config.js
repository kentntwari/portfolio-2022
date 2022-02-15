const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Courier Prime', 'monospace'],
    },
    fontSize: {
      base: '1rem',
      '4xl': '4.206rem',
      '3xl': '3.156rem',
      '2xl': '2.369rem',
      xl: '1.775rem',
      lg: '1.331rem',
      medium: '1.125rem',
    },
    colors: {
      white: {
        full: colors.white,
        site: '#fcfaf9',
        70: '#ffffffb3',
      },
      black: {
        full: colors.black,
      },
      blue: {
        full: colors.blue,
        015: '#1bd7f026',
        020: '#1bd7f033',
        040: '#1bd7f066',
      },
      green: {
        full: colors.green,
        100: '#09525b',
        016: '#81b75f29',
      },
      pink: {
        full: colors.pink,
        100: '#ff77b8',
        015: '#ff77b826',
        020: '#ff77b833',
        025: '#ff77b840',
      },
      red: {
        full: colors.red,
        100: '#ff49a0',
      },
    },
    extend: {
      spacing: {
        33: '8.25rem',
      },
    },
  },
  plugins: [],
};
