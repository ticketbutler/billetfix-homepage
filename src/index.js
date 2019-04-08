import React from "react";
import { render, hydrate } from "react-dom";
import { Router, Link } from "@reach/router";
import CMSPage from "./layouts/cms_page";
import Index from "./pages/index";
import { topNav } from "../data/topNavData";
import { footerNav } from "../data/footerNavData";
import pages from "../data/pagesData";
import locales from "../data/localData";
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

function App() {
  return (
    <Router>
      <Index default />
      {locales.map(locale => {
        let nav = {
          topNav: topNav.map(item => normalizeTranslatedKeys(item, locale.id)),
          footerNav: footerNav.map(item =>
            normalizeTranslatedKeys(item, locale.id)
          )
        };
        let localMetaData = normalizeTranslatedKeys(metaData, locale.id);
        let localPage = {};
        return pages.map(page => {
          localPage = {
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
          return (
            <CMSPage
              key={localPage.path + locale.id}
              path={localPage.path}
              pageContext={{
                nav,
                metadescription: localPage.metadescription,
                title: localPage.title,
                metaData: localMetaData,
                sections: localPage.sections,
                currentLocal: locale,
                locales: locales
              }}
            />
          );
        });
      })}
    </Router>
  );
}
const rootElement = document.getElementById("root");

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}
