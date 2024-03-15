/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: 'var(--background)',
      lavender: 'var(--lavender)',
      'mint-green': 'var(--mint-green)',
      'mint-green-link': 'var(--mint-green-link)',
      white: 'var(--white)',
      'light-gray': 'var(--light-gray)',
      'medium-gray': 'var(--medium-gray)',
      gray: 'var(--gray)',
      dark: 'var(--dark)',
      success: 'var(--success)',
      'success-dark': 'var(--success-dark)',
      warning: 'var(--warning)',
      'warning-dark': 'var(--warning-dark)',
      error: 'var(--error)',
      'error-light': 'var(--error-light)',
      archived: 'var(--archived)',
      'archived-dark': 'var(--archived-dark)',
      'modal-background': 'var(--modal-background)',
    },
    extend: {
      fontFamily: {
        sans: ['Sohne', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
