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
        '160': '40rem',
      },
      height: {
        '160': '40rem',
      },
    },
  },
  plugins: [],
}