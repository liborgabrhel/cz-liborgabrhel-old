module.exports = {
  siteMetadata: {
    title: `Libor Gabrhel`,
    author: `Libor Gabrhel`,
    description: `Personal website`,
    siteUrl: `https://liborgabrhel.cz`,
    profile: {
      name: `Libor`,
      surname: `Gabrhel`,
      bio: `the bald, bearded man with front-end in his 🧬`,
      email: `gabrhel.libor@gmail.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Libor Gabrhel`,
        short_name: `Libor_G`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
