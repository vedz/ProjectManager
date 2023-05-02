/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1F22',
        ternary: '#555555',
        secondary: '#477fff',
        white: {
          100: '#ffffff',
          80: '#efefef',
          60: '#dcdcdc',
          40: '#bdbdbd',
        },
      },
    },
  },
  plugins: [],
};
