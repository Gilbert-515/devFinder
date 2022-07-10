/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#141C2F'
        },
        white: {
          100: '#FEFEFE',
          200: '#dee5ff',
          300: '#FCFFFF',
          400: '#FBFFFF'
        },
        blue: {
          300: '#0079FE',
          500: '#1F2A48', 
          700: '#225DAC'
        },
        grey: {
          200: '#BAC2D5'
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
