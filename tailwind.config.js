/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"white",
        primaryDark:"#FF8C00",
        blur:"#808080"

      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
      
    },
  },
  plugins: [],
}

