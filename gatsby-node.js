const JSONdata = require("./data/pagesData");
const { topNav } = require("./data/topNavData");
const { footerNav } = require("./data/footerNavData");
const { normalizeTranslatedKeys } = require("./src/utils");
const path = require("path");
const metaData = require("./data/metaData");
const localData = require("./data/localData");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  localData.forEach(local => {
    let component = path.resolve("src/layouts/cms_page.js");
    let nav = {
      topNav: topNav.map(item => normalizeTranslatedKeys(item, local.id)),
      footerNav: footerNav.map(item => normalizeTranslatedKeys(item, local.id))
    };
    let localMetaData = normalizeTranslatedKeys(metaData, local.id);
    JSONdata.forEach(page => {
      localPage = {
        ...normalizeTranslatedKeys(page, local.id),
        sections: page.sections.map(section => {
          section = {
            ...section,
            ...normalizeTranslatedKeys(section, local.id)
          };
          Object.keys(section).forEach(key => {
            if (Array.isArray(section[key])) {
              section = {
                ...section,
                [key]: section[key].map(item =>
                  normalizeTranslatedKeys(item, local.id)
                )
              };
            }
          });
          return section;
        })
      };

      createPage({
        path: localPage.path,
        title: localPage.title,
        component: component,
        context: {
          nav,
          metadescription: localPage.metadescription,
          title: localPage.title,
          metaData: localMetaData,
          sections: localPage.sections,
          currentLocal: local,
          locales: localData
        }
      });
    });
  });
};
