module.exports = {
  purge: {
    enabled: process.env.MY_ENV_VAR === "production" ? true : false,
    content: ["./docs/.vuepress/theme/**/*.vue", "./docs/**/*.md"]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato Regular", "Lato Black", "Lato Bold", "Lato Bold Italic", "sans-serif"]
      },
      colors: {
        slate: "#2d3748",
        soft: "#f1f5fd",
        softer: "#fafbfe",
        blue: "#4a7cf6",
        red: "#da5a47",
        cinder: "#131119",
        green: "#27AB83",
        "light-slate": "#718096"
      },
      width: {
        80: "20rem"
      },
      screens: {
        xxl: "1408px"
      }
    }
  },
  variants: {},
  plugins: []
};
