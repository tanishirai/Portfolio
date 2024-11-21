/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingB: '#001C55',
        content: '#7F8DAA',
        table: '#72b6da',
        hovering: '#00509d',
      },
    },
  },
  plugins: [],
};
