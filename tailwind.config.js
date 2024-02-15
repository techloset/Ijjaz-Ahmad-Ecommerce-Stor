/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: "#292d32",
        warning: "#eda415",
        primary: "#003f62",
        gray: {
          DEFAULT: "#f4f4f4",
          "300": "#B6B6B6",
        },
        footer: {
          DEFAULT: "#E2F4FF",
          "300": "#87BCD9",
        },
      },
      fontFamily:{
        "poppins": ["Poppins","sans-serif"], 
      }
    },
  },
  plugins: [],
}