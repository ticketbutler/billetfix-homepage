import React from 'react'
import { WindowHelper } from '../components/helpers'

import { Button } from '../components/elements/elements'

const Hero = ({
  heading,
  image,
  texts = [],
  button1Text,
  button2Text,
  buttonLink,
  inputPlaceholder,
}) => (
  <WindowHelper>
    {window => (
      <section
        id="intro-section"
        style={{
          display: 'flex',
          textAlign: 'center',
          paddingBottom: '2%',

          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',

          backgroundSize: 'cover',
          ...(window.width > 980
            ? {
                minHeight: '600px',
                paddingTop: '6%',
              }
            : {
                paddingTop: '7%',
              }),
        }}
      >
        <div>
          <div style={{ marginTop: '0' }}>
            <img
              itemprop="image"
              src={image}
              alt="background"
              style={{
                zIndex: '-1',
                position: 'absolute',
                top: '0',
                left: '0',
                objectFit: 'cover',
                width: '100vw',
                height: '100vh',
                filter: 'brightness(40%) contrast(70%)',
              }}
            />

            <h1
              itemprop="headline"
              style={{
                color: '#ff4a6e',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: '43px',
                lineHeight: '72px',

                ...(window.width > 980
                  ? {
                      fontWeight: '700',
                      fontSize: '43px',
                      lineHeight: '72px',
                      letterSpacing: '5px',
                    }
                  : window.width > 600
                    ? {
                        fontWeight: '500',
                        fontSize: '25px',
                        lineHeight: '30px',
                        letterSpacing: '3px',
                      }
                    : {
                        marginTop: '100px',
                        fontSize: '26px',
                        letterSpacing: '2px',
                        lineHeight: '40px',
                        fontWeight: '400',
                      }),
              }}
            >
              {heading}
            </h1>

            {texts.map(text => (
              <span
                style={{
                  color: 'white',
                  display: 'block',
                  margin: '17.6px 0',

                  fontWeight: '100',
                  letterSpacing: '2px',
                  ...(window.width > 980
                    ? {
                        fontSize: '20px',
                        lineHeight: '39px',
                      }
                    : window.width > 600
                      ? {
                          fontSize: '15px',
                          lineHeight: '33px',
                        }
                      : {
                          fontSize: '14px',
                          lineHeight: '19px',
                        }),
                }}
              >
                {text}
              </span>
            ))}

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '57px',
                marginBottom: '74px',
              }}
              className="get-started"
            >
              <a
                style={{
                  letterSpacing: '3px',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  color: '#fff',

                  textDecoration: 'none',
                }}
                href={buttonLink}
              >
                <Button style={{ padding: '18px 17px' }}>{button1Text}</Button>
              </a>
            </div>
            {/* <div>
              <Button
                style={{
                  padding: '15px 10px',
                  marginTop: '60px',
                  marginBottom: '40px',
                }}
              >
                {button2Text}
              </Button>
            </div> */}

            <a
              style={{
                textTransform: 'uppercase',
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '2px',
                fontWeight: '100',

                ...(window.width < 660
                  ? {
                      display: 'none',
                    }
                  : {}),
              }}
              href="#features"
            >
              see how easy it is
            </a>
          </div>
        </div>
      </section>
    )}
  </WindowHelper>
)
export default Hero
