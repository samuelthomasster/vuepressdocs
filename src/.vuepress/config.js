const { description } = require('../../package')
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'API Docs',
  theme: "craftdocs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  base: "/vuepressdocs/",
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: [
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".theme-default-content img:not(.no-zoom)",
        delay: 1000,
        options: {
          margin: 24,
          background: "var(--medium-zoom-overlay-color)",
          scrollOffset: 0
        }
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "warning",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "danger",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "details",
        before: info =>
          `<details class="custom-block details">${
            info ? `<summary>${info}</summary>` : ""
          }\n`,
        after: () => "</details>\n"
      }
    ]
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
      extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ],
      anchor: {
        level: [2, 3, 4]
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
