import React from 'react'
import Link from 'gatsby-link'
import AppMockup from '../img/mobile-mockup.png'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const Article = ({ heading, text }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            background: '#fff',
            padding: '100px 6%',
            position: 'relative',
          }}
          id="teaser"
        >
          <div
            style={{
              padding: '0 10px',
              ...(window.width > 980
                ? {
                    maxWidth: '50%',
                    minWidth: '33%',
                  }
                : {
                    width: '100%',
                  }),
            }}
            className="details"
          >
            <h3
              style={{
                fontSize: '30px',
                letterSpacing: '3px',
                lineHeight: '1.2em',
                margin: '.25em 0',
                color: '#ff4a6e',
                fontWeight: '100',

                ...(window.width > 980
                  ? {
                      fontSize: '30px',
                      lineHeight: '40px',
                    }
                  : window.widht > 450
                    ? {
                        fontSize: '22px',
                        lineHeight: '27px',
                      }
                    : {
                        fontSize: '20px',
                        lineHeight: '25px',
                      }),
              }}
            >
              {heading}
            </h3>

            <p
              style={{
                lineHeight: '30px',
                letterSpacing: '2px',
                marginTop: 16,
                fontSize: '16px',
                color: '#333',
                fontWeight: '100',
              }}
            >
              {text}
            </p>
            <img
              style={{ height: '60px' }}
              src="../img/app-store.png"
              alt="app-store-icon"
            />
            <img
              style={{ height: '60px', marginLeft: '5px' }}
              src="../img/google-play.png"
              alt="app-store-icon"
            />
          </div>
          <div
            className="mockup"
            style={{
              minWidth: '33%',
              padding: '0 10px',

              ...(window.width > 680
                ? {}
                : {
                    display: 'none',
                  }),
            }}
          >
            <img src="../img/mobile-mockup.png" alt="mobile-mockup " />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}

export default Article
