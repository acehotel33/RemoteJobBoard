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
        burgundy: {
            50: '#FBE6E6',   // Light burgundy for backgrounds
            100: '#F5C1C1',  // Lighter shade for secondary elements
            200: '#EB9A9A',  // Secondary contrast
            300: '#E17373',  // Tertiary elements
            400: '#8A2223',  // Hover states or active elements
            500: '#870001',  // Base burgundy
            600: '#790001',  // Slightly darker for hover states or active elements
            700: '#690001',  // Darker shade for text or accents
            800: '#590001',  // Darker still for emphasis or headers
            900: '#490001',  // Darkest shade for strong emphasis or headers
        },
        gray: {
            50: '#F9FAFB',   // Lightest gray
            100: '#F3F4F6',  // Light gray for secondary elements
            200: '#E5E7EB',  // Secondary gray for borders or dividers
            300: '#D1D5DB',  // Mid gray for placeholders or inactive elements
            400: '#9CA3AF',  // Normal gray for text
            500: '#6B7280',  // Dark gray for primary text
            600: '#4B5563',  // Darker gray for emphasis
            700: '#374151',  // Very dark gray for strong emphasis or headers
            800: '#1F2937',  // Near-black for strong emphasis or headers
            900: '#111827',  // Darkest gray for strong emphasis or headers
        },
        gold: {
            50: '#FEF9F2',   // Light gold for accent backgrounds
            100: '#FEEBC8',  // Lighter gold for accent elements
            200: '#FBD38D',  // Warm gold for accent elements
            300: '#F6AD55',  // Rich gold for accent elements or CTAs
            400: '#ED8936',  // Deeper gold for accent elements or CTAs
            500: '#DD6B20',  // Base gold for primary accents
            600: '#C05621',  // Slightly darker gold for hover states or active accents
            700: '#9C4221',  // Dark gold for emphasis or accent text
            800: '#7B341E',  // Darker gold for strong emphasis or headers
            900: '#652B19',  // Darkest gold for strong emphasis or headers
        },    
        alabaster: '#F8F8F8', // Base website off-white background
        lightburg: '#7d4351',
      },
    },
  },
  plugins: [],
}

