/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thai: ['"Noto Sans Thai"', 'sans-serif'],
        eng: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}