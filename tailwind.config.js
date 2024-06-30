/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#246CF9',
        darkBlue: '#010220',
        black: '#1E1E1E',
        darkGrey: '#5A6476',
        lightGrey: '#BDBDBD',
        white: '#FFFFFF',
      },
      fontFamily: {
        sora: 'Sora',
        inter: 'Inter',
      }
    },
  },
  plugins: [],
}