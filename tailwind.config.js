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
        bcor: "#06b6d4",
        slider: "#b1d788",
        link: "#409eff",
        dblue:"#0076f6"
      }
    },
    screens: {
      xs: "500px",
      sm: "768px",
      md: "950px",
      lg: "1400px",
      xl: "1920px"
    }
  },
  plugins: []
}
