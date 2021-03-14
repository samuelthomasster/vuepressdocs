const { description } = require('../../package')
module.exports = {
  title: 'API Docs',
  theme: "craftdocs",
  base: "/vuepressdocs/",
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.png' }]
  ],
  shouldPrefetch: () => false,
  head: require("./head"),
  themeConfig: {
    title: "PetStore Documentation",
    docSets: [
      require("./sets/main-docset"),
    ],
      codeLanguages: {
        go: "Golang",
        javascript: "Javascript",
        python: "Python",
        ruby: "Ruby",
        yaml: "YAML",
        json: "JSON",
        xml: "XML",
      },
      feedback: {
        helpful: "Was this page helpful?",
        thanks: "Thanks for your feedback.",
        more: "Give More Feedback →"
      }
    },
    markdown: {

      anchor: {
        level: [2,3]
      },
      toc: {
        format(content) {
          return content.replace(/[_`]/g, "");
        }
      },
      config(md) {
        // provide our own highlight.js to customize Prism setup
        let markup = require("vuepress-theme-craftdocs/markup")
        md.use(markup)
      }
    },
    postcss: {
    plugins: require("../../postcss.config.js").plugins
   }
}; 
