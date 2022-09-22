/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'clouds-pattern': "url('/public/clouds.svg')",
      },
    },
  },
  plugins: [],
};
