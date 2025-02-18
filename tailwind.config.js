/** @type {import('tailwindcss').Config} */

const defaultTheme= require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mango': ['MANGO', ...defaultTheme.fontFamily.sans, ...defaultTheme.fontFamily.serif],
        'humane': ['HUMANE', ...defaultTheme.fontFamily.sans, ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}

