/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      menu: ["poppins"],
      hero: ["Montserrat Alternates"],
    },
    extend: {
      colors: {
        primary: "#04ff07",
        primaryGreen: "var(--primary-green)",
        primaryBlue: "var(--primary-blue)",
        labBlack: "var(--labBlack)",
      },
    },
  },
  plugins: [],
};
