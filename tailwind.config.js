const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kanit', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      height: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}