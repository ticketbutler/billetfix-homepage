import React from 'react'
import { WindowHelper } from '../components/helpers'
import { Overlay } from './elements/overlay'
import { Cross } from './icons/closeCross'
import { Button } from '../components/elements/elements'
import { Switch } from './elements/elements'
import { Arrow } from './icons/arrow'
const Hero = ({
  heading,
  image,
  texts = [],
  buttonText,
  featuresLink,
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
                        fontWeight: '500',
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
            <Switch>
              {({ on, toggle }) => (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100vh',
                      transition: 'all 0.5s',
                      ...(on
                        ? {
                            visibility: 'visible',
                            opacity: '1',
                          }
                        : {
                            visibility: 'hidden',
                            opacity: '0',
                          }),
                    }}
                  >
                    <Overlay
                      style={{ width: '100%', height: '100%', zIndex: '99' }}
                    >
                      <Cross
                        style={{
                          position: 'absolute',
                          top: '0',
                          ...(window.width > 980
                            ? {
                                right: '55px',
                                marginTop: '-156px',
                              }
                            : { marginTop: '-172px', right: '5px' }),
                        }}
                        onClick={() => {
                          toggle()
                        }}
                      />
                      <iframe
                        style={{
                          width: '100%',

                          height: '100vh',
                          ...(window.width > 980
                            ? {
                                maxWidth: ' 70%',
                                marginTop: '145px',
                                maxHeight: '70vh',
                              }
                            : {
                                maxWidth: '84%',
                                marginTop: '132px',
                                maxHeight: '73vh',
                              }),
                        }}
                        src="https://www.youtube.com/embed/pk7WopW7Ii8"
                      />
                    </Overlay>
                  </div>
                  <div style={{ paddingTop: '20px' }}>
                    <Button
                      onClick={() => {
                        toggle()
                      }}
                      style={{
                        padding: '15px 10px',
                        marginTop: '15px',
                        marginBottom: '40px',
                      }}
                    >
                      {buttonText}
                    </Button>
                  </div>
                </>
              )}
            </Switch>
            <div style={{ paddingTop: '25px' }}>
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
                {featuresLink}
                <Arrow style={{ display: 'block', margin: '0 auto' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    )}
  </WindowHelper>
)
export default Hero
