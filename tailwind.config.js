/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '840px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'iran_Bold': 'iran_Bold',
      'iran_Light': 'iran_Light',
    },
    extend: {
      colors:{
        main_digikala: '#ef4056',
      },
    },
  },
  plugins: [],
};
