/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2d73a3",
        primaryColor: "#2d73a3",
        secondary: "#2d73a3",
        headerColor: "#62c3d2",
        textColor: "#6e7074",
      },
      fontFamily: {
        fontName: ["Montserrat", "sans-serif"],
        subTitle: ["Island Moments", 'cursive'],
      },
    },
  },
  plugins: [],
};
