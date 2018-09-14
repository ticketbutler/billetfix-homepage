const JSONdata = require('./pagesData')
const { topNav, footerNav } = require('./navData')
const { normalizeTranslatedKeys } = require('./src/utils')
const path = require('path')

let locales = ['da', 'en']

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  locales.forEach(local => {
    let component = path.resolve('src/pages/cms_page.js')
    let nav = {
      topNav: topNav.map(item => {
        normalizeTranslatedKeys(item, local)
      }),
      footerNav: footerNav.map(item => normalizeTranslatedKeys(item, local)),
    }
    JSONdata.forEach(page => {
      localPage = {
        ...normalizeTranslatedKeys(page, local),
        sections: page.sections.map(section => {
          section = {
            ...section,
            ...normalizeTranslatedKeys(section, local),
          }
          Object.keys(section).forEach(key => {
            if (Array.isArray(section[key])) {
              section = {
                ...section,
                [key]: section[key].map(item =>
                  normalizeTranslatedKeys(item, local)
                ),
              }
            }
          })
          return section
        }),
      }

      createPage({
        path: '/' + local + localPage.path,
        title: localPage.title,
        component: component,
        layout: null,
        context: {
          nav,
          sections: localPage.sections,
        },
      })
    })
  })
}
