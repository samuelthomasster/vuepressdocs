module.exports = [
  [
    "script",
    {},
    `let htmlElement = document.getElementsByTagName("html")[0];
    if (localStorage && localStorage['docs.theme']) {
      htmlElement.className += (htmlElement.className ? ' ' : '') + 'theme-' + localStorage['docs.theme'];
    }`
  ],
  
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./favicon32.png"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "./favicon16.png"
    }
  ],
  ["meta", { name: "theme-color", content: "#f1f5fd" }]
];
