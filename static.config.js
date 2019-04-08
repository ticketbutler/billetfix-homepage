import path from "path";
import { topNav } from "./data/topNavData";
import { footerNav } from "./data/footerNavData";
import pages from "./data/pagesData";
import locales from "./data/localData";
import { normalizeTranslatedKeys } from "./utils";

const metaData = {
  url: "https://billetfix.dk/",
  companyName: "Billetfix",
  address: "Esplanaden 7,",
  region_en: "Copenhagen",
  region_da: "København",
  locality_en: "Copenhagen",
  locality_da: "København",
  country_en: "Denmark",
  country_da: "Danmark",
  postalCode: "1263"
};

function makeLocalePage(page, locale) {
  let nav = {
    topNav: topNav.map(item => normalizeTranslatedKeys(item, locale.id)),
    footerNav: footerNav.map(item => normalizeTranslatedKeys(item, locale.id))
  };
  let localMetaData = normalizeTranslatedKeys(metaData, locale.id);
  const localPage = {
    ...normalizeTranslatedKeys(page, locale.id),
    sections: page.sections.map(section => {
      section = {
        ...section,
        ...normalizeTranslatedKeys(section, locale.id)
      };
      Object.keys(section).forEach(key => {
        if (Array.isArray(section[key])) {
          section = {
            ...section,
            [key]: section[key].map(item =>
              normalizeTranslatedKeys(item, locale.id)
            )
          };
        }
      });
      return section;
    })
  };
  return {
    path: localPage.path,
    template: "src/layouts/cms_page",
    getData: () => ({
      nav,
      metadescription: localPage.metadescription,
      title: localPage.title,
      metaData: localMetaData,
      sections: localPage.sections,
      currentLocal: locale,
      locales: locales
    })
  };
}

export default {
  getRoutes: () => {
    const pagesByLocale = locales.map(locale => {
      return pages.map(page => makeLocalePage(page, locale));
    });
    return pagesByLocale.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
