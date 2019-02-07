# Billetfix homepage

# Set up

- Install gatsby deps (https://www.gatsbyjs.org/tutorial/part-zero/)
- Run `yarn`

# How pages are made

- In `gatsby-node.js` we create pages for each page defined in the `data/` folder
- Each page is constructed by a set of components defined in the pages' data
- Many component properties are translatable, so they are translated and seperated into `en/`, `da/` prefixes
- All pages are wrapped in a common layout component
