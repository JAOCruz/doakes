/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37', // A classic gold shade
          fontSize: {
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '8rem',
            '10xl': '10rem', // custom size
        },
      },
    },
  },
  plugins: [],
}