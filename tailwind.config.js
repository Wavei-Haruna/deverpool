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
        primaryBlue: "var(--primary-blue)",
      },
      backgroundColor:{
        primBgBlue: "var(--primary-blue)",
      }
    },
  },
  plugins: [],
};
