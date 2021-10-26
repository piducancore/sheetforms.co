module.exports = {
  siteMetadata: {
    title: "sheetforms.co",
    siteUrl: "https://sheetforms.co",
    description: "A simple API to save your forms data to a Google spreadsheet.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    "gatsby-plugin-theme-ui",
  ],
};
