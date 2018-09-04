const path = require('path')

const query = `query IndexQuery {
  Pages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
    edges {
      node {
        frontmatter {
          title
          path
          sections {
            type
            heading
            text
            image
            image_alt
            button_text
            button_link
          } 
        }
      }
    }
  }
}`

// TopMenu: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/top-menu/"}}) {
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//           items {
//             path
//             label
//           }
//         }
//       }
//     }
//   }
//   FooterMenu: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/footer-menu/"}}) {
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//           items {
//             path
//             label
//           }

//         }
//       }
//     }
//   }
//   Contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//           address
//           phone
//           support
//         }
//       }
//     }
//   }

// }`

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  let Component = path.resolve('./src/pages/cms_page.js')
  let pages = require('./pagesData').default
  pages.forEach(page => {
    createPage({
      path: page.path,
      component: Component,
      layout: null,
      context: {
        sections: page.sections,
        layout: {},
      },
    })
  })
}
