const { description } = require('../../package')
module.exports = {
  title: 'API Docs',
  theme: "craftdocs",
  base: "/vuepressdocs/",
  description: description,
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
      extendMarkdown(md) {
        // provide our own highlight.js to customize Prism setup
        md.options.highlight = require("./theme/highlight");
        // add markdown extensions
        md.use(require("./theme/markup"))
          .use(require("markdown-it-deflist"))
          .use(require("markdown-it-imsize"));
      }  
    },
    postcss: {
    plugins: require("../../postcss.config.js").plugins
   }
}; 
