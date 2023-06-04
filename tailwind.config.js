/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        "brand-gradient-top" : "#FFD809",
        "brand-gradient-down" : "#FD900C"
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
        hauora : ['Hauora Sans', 'sans-serif'],
        quicksand : ["Quicksand", 'sans-serif']
      },
      borderRadius: {
        brand : '20px'
      }
    },
  },
  plugins: [],
}
