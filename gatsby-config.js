module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "krm-site-gatsby",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
