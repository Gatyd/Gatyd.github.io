/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Active le mode sombre via une classe
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002B36',
        accent: '#FF6347',
        'accent-light': '#FF8567',
        'gray-dark': '#444B5A',
        'gray-light': '#D9E0E6',
      },
    },
  },
  plugins: [],
};