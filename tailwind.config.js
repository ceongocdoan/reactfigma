/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: 
  {
      'custom-1180': '1180px', 
      'custom-928': '928px',
      'custom-1065': '1065px',
      'custom-920': '920px',
    },
  },
  },
  
  plugins: [],
}

