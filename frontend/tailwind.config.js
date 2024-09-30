/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      //   arialRounded : ['"Arial Rounded MT Bold"', 'Arial', 'sans-serif']
      // },
      fontFamily: {
        arialRounded: ['"Arial Rounded MT Bold"', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        customRed: 'rgb(186, 73, 73)', 
      },
       keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  plugins: [],
}

