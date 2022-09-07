/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "50px": "50px"
      },
      colors: {
        gre: "#2fa968",
        bcor: "#06b6d4"
      }
    },
    screens: {
      sm: "768px",
      md: "992px",
      lg: "1400px",
      xl: "1920px"
    }
  },
  plugins: []
}
