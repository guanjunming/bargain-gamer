/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "500px",
        ml: "910px",
      },
      rotate: {
        8: "8deg",
      },
    },
  },
  plugins: [],
};
