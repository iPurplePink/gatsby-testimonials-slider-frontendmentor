module.exports = {
  siteMetadata: {
    title: "Testimonials Slider",
    titleTemplate: "%s · Testimonials Slider",
    description: "Frontend Challenge",
    url: "http://localhost", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@iPurplePink",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-client-side-redirect`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
