module.exports = {
  siteMetadata: {
    title: "Testimonials Slider",
    titleTemplate: "%s · Testimonials Slider",
    description: "Frontend Challenge",
    url: "http://localhost:8080", // No trailing slash allowed!
    image: "/images/pattern-bg.svg", // Path to your image you placed in the 'static' folder
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
