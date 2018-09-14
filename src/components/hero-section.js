import React from 'react'
import { WindowHelper } from '../components/helpers'
import Img from '../img/lights.jpg'
import { Button } from '../components/elements/elements'
import data from '../../pagesData'

const Hero = ({ heading, image, texts = [], button1Text, button2Text }) => (
  <WindowHelper>
    {window => (
      <section
        id="intro-section"
        style={{
          display: 'flex',
          textAlign: 'center',
          paddingBottom: '2%',
          backgroungImage: 'Img',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'Img',
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
              src="../img/lights.jpg"
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
              }}
              className="get-started"
            >
              <input
                style={{
                  fontSize: '18px',
                  padding: '10px',
                  width: '365px',
                  height: '56px',
                  border: '.5px solid #ff4a6e',
                  borderRadius: '3px',
                  ...(window.width < 660
                    ? {
                        display: 'none',
                      }
                    : {}),
                }}
                id="event-title"
                type="text"
                placeholder="Your event title goes here..."
              />

              <Button>
                <a
                  style={{
                    letterSpacing: '3px',
                    fontSize: '15px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                  href=""
                >
                  {button1Text}
                </a>
              </Button>
            </div>
            <div>
              <Button
                style={{
                  padding: '15px 10px',
                  marginTop: '60px',
                  marginBottom: '40px',
                }}
              >
                {button2Text}
              </Button>
            </div>

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
              href="features"
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
