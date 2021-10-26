module.exports = {
  siteMetadata: {
    title: "sheetforms.co",
    siteUrl: "https://sheetforms.co",
    description: "An open API to save your forms data to a Google Spreadsheet.",
    repo: "https://github.com/piducancore/sheetforms.co",
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
