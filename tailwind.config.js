const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '2000px',
    },

    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Courier Prime', 'monospace'],
    },
    fontSize: {
      base: '1rem',
      major: '21.33px',
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
      gray: {
        full: colors.gray,
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
    borderRadius: {
      md: '10px',
      full: '9999px',
    },
    extend: {
      spacing: {
        3.75: '15px',
        7.5: '1.875rem',
        33: '8.25rem',
      },
      boxShadow: {
        snippet: '10px 22px 39px 10px rgba(196,196,196,0.25)',
        regular: '0 4px 4px rgba(196,196,196,0.25)',
      },

      dropShadow: {
        regular: '0 4px 4px rgba(196,196,196,0.25)',
      },
    },
  },
  plugins: [],
};
