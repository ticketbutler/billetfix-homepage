import React from 'react'

import { WindowHelper } from '../components/helpers'

const About = ({ heading, texts, staticHeader }) => {
  return (
    <WindowHelper>
      {window => (
        <div>
          <section
            style={{
              overflow: 'hidden',
              background: '#fff',
              color: '#333',

              ...(window.width > 980
                ? {
                    padding: '125px 6%',
                  }
                : {
                    padding: '80px 6%',
                  }),
            }}
          >
            <div
              style={{
                maxWidth: '672px',
                margin: '0 auto',
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                  fontWeight: '300',

                  letterSpacing: '2px',
                  display: 'block',
                  ...(window.width > 980
                    ? {
                        fontSize: '45px',
                      }
                    : {
                        fontSize: '28px',
                      }),
                }}
              >
                {heading}
              </h1>
              <div>
                {texts.map(text => (
                  <p
                    style={{
                      lineHeight: '32px',
                      marginTop: '15px',
                      fontSize: '16.5px',
                      letterSpacing: '1px',
                      fontWeight: '100',
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </WindowHelper>
  )
}

export default About
