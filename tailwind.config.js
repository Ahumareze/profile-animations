/** @type {import('tailwindcss').Config} */

const defaultTheme= require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#ef901d',
        'purple-primary': '#a657a1'
      },
      fontFamily: {
        'mango': ['MANGO', ...defaultTheme.fontFamily.sans, ...defaultTheme.fontFamily.serif],
        'humane': ['HUMANE', ...defaultTheme.fontFamily.sans, ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}

