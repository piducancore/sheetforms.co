module.exports = {
  siteMetadata: {
    title: "sheetforms.co",
    siteUrl: "https://sheetforms.co",
    description: "A simple API to append data to a Google spreadsheet. Just point your forms at it.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },

    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        // preset: "@theme-ui/preset-base",
      },
    },
  ],
};
