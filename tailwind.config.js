/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        'pattern-blue': {
          500: '#5265DE',
          600: '#3b4891',
          800: '#252B46'
        } 
      }
    }
  },
  plugins: [],
}

