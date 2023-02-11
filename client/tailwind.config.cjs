/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#134e4a',
        primary: '#14b8a6',
        secondary: '#f97316',
        light: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
