/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-lg': {
          textShadow: theme('textShadow.lg'),
        },
      }
      addUtilities(newUtilities)
    })
  ],
}
