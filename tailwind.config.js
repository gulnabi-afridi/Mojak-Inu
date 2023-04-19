/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        comfortaa:["Comfortaa","inter"],
       carter :["Carter One","inter"],
      },
      colors: {
        brand: "#419bfe",
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
          off: "#0e0e0e",
        },
        yellow: {
          main: "#ffa64b",
        },
      },
    },
  },
  plugins: [],
};
