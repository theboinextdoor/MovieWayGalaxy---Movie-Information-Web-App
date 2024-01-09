/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "primaryBackground"     : "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
        "secondaryBAckground"   : "bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black",
        "myBlack"               :   "#000000",
        "myRed"                 :   "#bf0000"
      } ,
      fontFamily : {
        "myFont" : ['Jost', 'sans-serif'],
      },
      screens: {
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra-large screens
      },
      spacing: {
        '1/2': '0.125rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}

