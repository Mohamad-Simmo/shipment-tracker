/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: '#303841',
        primary: '#3b82f6',
        secondary: '#FF5722',
        light: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
