/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D3E4F6",
          200: "#ABC8ED",
          300: "#7598CA",
          400: "#476496",
          500: "#182B50",
          600: "#112144",
          700: "#0C1839",
          800: "#07102E",
          900: "#040B26",
        },
        secondary: {
          100: "#FFF0CC",
          200: "#FFDC99",
          300: "#FFC366",
          400: "#FFAB3F",
          500: "#FF8300",
          600: "#DB6500",
          700: "#B74C00",
          800: "#933600",
          900: "#7A2700",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"'],
      },
      width: {
        100: "25rem",
      },
      screens: {
        xl: "1200px",
      },
      gridTemplateColumns: {
        productInfo: "110px 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
