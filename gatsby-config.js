module.exports = {
  siteMetadata: {
    title: 'Migration Encounters',
    author: 'Luis Aguilar, Claudio Gage',
    description: 'Migration Encounters description Metadata',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Migration Encounters',
        short_name: 'Migration Encounters',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
