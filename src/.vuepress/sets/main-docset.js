module.exports = {
  title: "API reference | %v",
  setTitle: "API reference",
  baseDir: "",
  icon:"/assets/logo.png",
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
