const JSONdata = require('./pagesData')
const { topNav, footerNav } = require('./navData')
const { normalizeTranslatedKeys } = require('./src/utils')
const path = require('path')
const localData = require('./localData')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  localData.forEach(local => {
    let component = path.resolve('src/pages/cms_page.js')
    let nav = {
      topNav: topNav.map(item => normalizeTranslatedKeys(item, local.id)),
      footerNav: footerNav.map(item => normalizeTranslatedKeys(item, local.id)),
    }
    JSONdata.forEach(page => {
      localPage = {
        ...normalizeTranslatedKeys(page, local.id),
        sections: page.sections.map(section => {
          section = {
            ...section,
            ...normalizeTranslatedKeys(section, local.id),
          }
          Object.keys(section).forEach(key => {
            if (Array.isArray(section[key])) {
              section = {
                ...section,
                [key]: section[key].map(item =>
                  normalizeTranslatedKeys(item, local.id)
                ),
              }
            }
          })
          return section
        }),
      }

      createPage({
        path: localPage.path,
        title: localPage.title,
        component: component,
        layout: null,
        context: {
          nav,
          sections: localPage.sections,
          currentLocal: local,
          locales: localData,
        },
      })
    })
  })
}
