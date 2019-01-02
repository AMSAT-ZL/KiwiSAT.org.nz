module.exports = {
  siteMetadata: {
    title: `KiwiSAT`,
    description: `KiwiSAT - A New Zealand Satellite`,
    author: `@jtittsler`,
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
        name: `KiwiSAT`,
        short_name: `KiwiSAT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kiwisat-icon.jpg`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
