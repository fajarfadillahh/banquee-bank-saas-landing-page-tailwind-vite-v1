module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1024px",
    },
    fontFamily: {
      body: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      bold: 700,
    },
    extend: {},
  },
  plugins: [],
};
