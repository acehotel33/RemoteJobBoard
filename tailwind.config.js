/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", // Adjust if necessary to point to where your files are
  "./public/index.html",
],
  theme: {
    extend: {
      spacing: {
        '4': '1rem', // Used for p-4, m-4 etc.
        '8': '2rem', // Used for p-8, m-8 etc.
        // Define more as needed
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        kaushan: ['Kaushan', 'cursive'],
        cookie: ['Cookie', 'cursive'],
      },
      colors: {
        burgundy: '#800020',
        alabaster: '#F8F8F8',
        lightburg: '#7d4351',
      },
    },
  },
  plugins: [],
}

