/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      screens: {
        '600-screen': '600px',
      },
    },
  },
  plugins: [],
};
