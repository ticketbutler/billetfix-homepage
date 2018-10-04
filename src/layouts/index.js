import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/elements/elements'
import Footer from '../components/footer'
import '../layouts/styles/layout-overide.css'
import { Helmet } from 'react-helmet'
import { WindowHelper } from '../components/helpers'
import Logo from '../img/logox400.png'
import LanguageLink from '../components/languageLink'

const styles = {
  hamburger: {
    backgroundColor: '#333',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    margin: '4px 0',
  },
}

export const Layout = ({
  children,
  data,
  metaData,
  fadeHeader,
  target,
  title,
  metadescription,
  nav,
  currentLocal,
  locales,
}) => (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="../img/favicon.png" type="image/png" />
      <meta property="og:image" content="../img/logox400.png" />
      <meta property="og:site_name" content={`${metaData.companyName}`} />

      <meta name="theme-color" content="#ef4c6f" />
      <meta name="msapplication-navbutton-color" content="#ef4c6f" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#ef4c6f" />

      <title>{`${title}`}</title>
      <meta name="description" content={`${metadescription}`} />

      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={`${metaData.url}`} />
      <meta
        property="business:contact_data:street_address"
        content={`${metaData.address}`}
      />
      <meta
        property="business:contact_data:locality"
        content={`${metaData.locality}`}
      />
      <meta
        property="business:contact_data:region"
        content={`${metaData.region}`}
      />
      <meta
        property="business:contact_data:postal_code"
        content={`${metaData.postalCode}`}
      />
      <meta
        property="business:contact_data:country_name"
        content={`${metaData.country}`}
      />

      <script type="application/ld+json">
        {`

        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Billetfix",
           
            "image": "https://placeimg.com/640/480/any",
            "@id": "",
            "url": "billetfix.dk",
            "telephone": "89 80 12 80",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Esplanaden 7, København K",
                "addressLocality": "København",
                "postalCode": "1263",
                "addressCountry": "DA"
            },
            "sameAs": [
                "https://www.facebook.com/BilletFix/",
                "https://www.linkedin.com/company/billetfix/"
            ], 
            
            "founders": [
            {
              "@type": "Person",
              "name": "Mads Kjer",
              "sameAs": 
              "https://www.linkedin.com/in/madskjer/"
          
          },
          {
              "@type": "Person",
              "name": "Emil Brøgger Kjer",
              "sameAs": 
              "https://www.linkedin.com/in/emilkjer/"
              
          },
          {
              "@type": "Person",
              "name": "Kyle Thomson",
              "sameAs":
              "https://www.linkedin.com/in/kyle-thomson/"
              
          }
          ]
        }
        `}
      </script>
      <script src="https://wchat.freshchat.com/js/widget.js" />
    </Helmet>
    <div>
      <WindowHelper>
        {window => (
          <nav
            itemprop="breadcrumb"
            id="nav"
            style={{
              top: '0',
              width: '100%',
              display: 'flex',
              position: 'fixed',
              justifyContent: 'space-between',
              zIndex: '999',
              transition: 'all 0.5s',
              padding: '15px 5%',
              ...(fadeHeader
                ? window.scrollY >= 10
                  ? {
                      backgroundColor: '#f5f5f5',
                    }
                  : {
                      backgroundColor: 'transparent',
                    }
                : {
                    backgroundColor: '#f5f5f5',
                  }),
            }}
          >
            <a href={'/' + currentLocal.id}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  margin: '0',
                  maxWidth: '160px',
                  maxHeight: '70px',
                }}
              />
            </a>

            <div
              id="navDiv"
              style={{
                padding: '0',
                transition: 'all .25s',
                ...(window.width > 980
                  ? { margin: '10px' }
                  : {
                      transform: 'translateX(100%)',
                      position: 'absolute',
                      textAlign: 'center',
                      top: '75px',
                      right: '-140px',
                      width: '80%',
                      maxWidth: '250px',
                      alignItems: 'baseline',
                      background: '#f5f5f5',
                      boxShadow: '0 3px 5px rgba(60,60,60,.03)',
                    }),
              }}
            >
              {nav.topNav.map(
                ({ type, link, caption, attributes = {}, buttonText }) => {
                  if (type === 'buttonLink') {
                    return (
                      <a
                        itemprop="significantLink"
                        style={{
                          ...(window.width < 980
                            ? {
                                paddingBottom: '10px',
                                display: 'block',
                                marginTop: '30px',
                              }
                            : {}),
                        }}
                        href="https://billetfix.dk/event/create_event/"
                      >
                        <Button
                          style={{
                            margin: '-11px auto',
                            padding: '8px 13px',

                            borderRadius: '2px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            textAlign: 'center',
                            fontWeight: '400',
                          }}
                        >
                          {buttonText}
                        </Button>
                      </a>
                    )
                  } else {
                    return (
                      <a
                        style={{
                          textDecoration: 'none',

                          transition: 'all 0.5s',

                          ...(window.width > 980
                            ? {
                                fontWeight: '500',
                                marginLeft: '16px',
                                fontSize: '13px',
                                color: '#f7f7f7',
                                padding: '0 10px',
                                ...(fadeHeader
                                  ? window.scrollY >= 10
                                    ? {
                                        color: 'black',
                                      }
                                    : {
                                        color: 'white',
                                      }
                                  : {
                                      color: 'black',
                                    }),
                              }
                            : {
                                marginLeft: '0',
                                padding: '15px 20px',
                                fontSize: '15px',
                                fontWeight: '600',
                                color: '#333',
                                display: 'block',
                              }),
                        }}
                        href={link}
                        {...attributes}
                      >
                        {caption}
                      </a>
                    )
                  }
                }
              )}

              <LanguageLink
                fadeHeader={fadeHeader}
                currentLanguage={currentLocal}
                otherLanguages={locales.filter(local => {
                  return local.id !== currentLocal.id
                })}
              />
            </div>
            <div
              style={{
                backgroundColor: '#ddd',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
                position: 'fixed',
                right: '15px',
                ...(window.width > 980
                  ? {
                      marginTop: '6px',
                      display: 'none',
                    }
                  : window.width > 450
                    ? {
                        marginTop: '6px',
                      }
                    : {
                        marginTop: '5px',
                        display: 'block',
                      }),
              }}
              onClick={() => {
                document
                  .getElementById('navDiv')
                  .classList.toggle('menuVisible')
              }}
            >
              <div style={styles.hamburger} />
              <div style={styles.hamburger} />
              <div style={styles.hamburger} />
            </div>
          </nav>
        )}
      </WindowHelper>
    </div>
    {children}

    <Footer links={nav.footerNav} />
    <script
      async
      dangerouslySetInnerHTML={{
        __html: `window.fcWidget.init({
              token: "caada681-1687-44bf-b803-7e061a49883e",
              host: "https://wchat.freshchat.com",
            });`,
      }}
    />
  </div>
)
