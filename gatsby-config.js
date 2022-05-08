module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Yunsu Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-layout",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Nanum Gothic",
            weights: ["400", "700", "800"],
          },
        ],
      },
    },
  ],
};
