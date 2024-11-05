/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        sm:'10px',
        md:'15px',
        lg:'0px'
      }
    },
    fontFamily:{
      'rubik':[ "Rubik", 'sans-serif']
    }
  },
  plugins: [],
}