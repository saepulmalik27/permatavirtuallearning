const path = require('path');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Permata Virtual Learning`,
    description: `permata virtual learning`,
    image: `https://cdn.inspigo.id/public/cover/meta-image.png`,
    author: `Inspigo Team`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        sections : path.join(__dirname, 'src/sections'),
        content : path.join(__dirname,'content')
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `permata virtual learning`,
        short_name: `pvl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
