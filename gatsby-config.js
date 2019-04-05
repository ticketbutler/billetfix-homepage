module.exports = {
  siteMetadata: {
    title: "Billetfix homepage"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: "21964485180092"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-70000511-1"
      }
    }
  ]
};
