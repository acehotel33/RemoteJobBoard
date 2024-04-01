/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", // Adjust if necessary to point to where your files are
  "./public/index.html",
],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#9d2d41', // Replace with your exact burgundy color
          // You can also add lighter or darker shades if you need them:
          // light: '#9d2d41',
          // dark: '#5c0015'
        },
      },
    },
  },
  plugins: [],
}

