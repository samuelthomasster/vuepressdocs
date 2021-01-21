module.exports = {
  title: "API Reference Documentation | %v",
  setTitle: "API Reference Documentation",
  icon: "/src/.vuepress/logo.png",
  baseDir: "",
  searchPlaceholder: "Search the docs (Press “/” to focus)",
  primarySet: true,
  locales: {
    "/": {
      lang: "en-US",
      name: "English",
      title: "API Documentation | %v",
      config: require("./main-docset-en.js")
    }
  }
};
