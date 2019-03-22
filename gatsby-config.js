module.exports = {
  siteMetadata: {
    title: "Billetfix homepage"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-70000511-1"
      }
    }
  ]
};
