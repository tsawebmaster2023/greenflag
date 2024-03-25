/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kanit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

