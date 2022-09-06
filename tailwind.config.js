/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "992px",
      lg: "1400px",
      xl: "1920px"
    }
  },
  plugins: []
}
