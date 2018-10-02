import React from 'react'
import { Button } from '../components/elements/elements'
import { WindowHelper } from '../components/helpers'

const TicketPrice = ({
  heading,
  prices,
  ticketHeading,
  ticketText1,
  ticketText2,
  ticketText3,
  serviceFee,
  buttonText,
}) => (
  <WindowHelper>
    {window => (
      <section style={{ padding: '7em 0', background: '#f7f7f7' }}>
        <h3
          itemprop="headline"
          style={{
            letterSpacing: '3px',
            paddingBottom: '15px',
            textAlign: 'center',
            margin: '0.25em 0px',
            color: 'rgb(255, 74, 110)',
            fontWeight: '100',

            ...(window.width > 980
              ? { fontSize: '30px' }
              : {
                  fontSize: '23px',
                  fontWeight: '500',

                  paddingLeft: '25px',
                }),
          }}
        >
          {heading}
        </h3>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: ' center',
          }}
        >
          {prices.map(price => (
            <div
              className="price-card"
              style={{
                margin: '20px',
                minWidth: '280px',
                border: '2px solid #ff4a6e',
                borderRadius: ' 3px',
                background: '#FFFFFF',
                color: '#333',
                display: 'block',
              }}
            >
              <div
                className="header-price"
                style={{
                  width: '100%',
                  background: '#ff4a6e',
                  color: '#fff',
                  textAlign: 'center',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                }}
              >
                <span
                  style={{
                    paddingTop: ' 1em',
                    display: 'block',
                    fontSize: '.75em',
                    fontWeight: '100',
                    letterSpacing: '3px',
                  }}
                >
                  {ticketHeading}
                </span>
                <h3
                  itemprop="price"
                  style={{
                    color: '#fff',
                    display: 'inline-block',
                    fontSize: '35px',
                    margin: ' 0',
                    fontWeight: '400',
                    padding: '5px 0',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                  }}
                >
                  {price.attendeePrice}
                </h3>
                <span
                  itemprop="priceCurrency"
                  content="DKK"
                  style={{
                    fontWeight: '100',
                    letterSpacing: '2px',
                  }}
                >
                  {' '}
                  DKK
                </span>
              </div>
              <div
                className="body"
                style={{
                  textAlign: 'center',
                  padding: '10px',
                }}
              >
                <span
                  style={{
                    fontWeight: '100',
                    display: 'block',
                    padding: '.5em 0',
                    letterSpacing: '2px',
                    fontSize: '1.2em',
                  }}
                  dangerouslySetInnerHTML={{ __html: ticketText1 }}
                />
                <span
                  style={{
                    fontWeight: '100',
                    display: 'block',
                    padding: '.5em 0',
                    letterSpacing: '2px',
                    fontSize: '1.2em',
                  }}
                  dangerouslySetInnerHTML={{ __html: ticketText2 }}
                />
                <span
                  style={{
                    fontWeight: '100',
                    display: 'block',
                    padding: '.5em 0',
                    letterSpacing: '2px',

                    fontSize: '1.2em',
                  }}
                  dangerouslySetInnerHTML={{ __html: ticketText3 }}
                />

                <div
                  className="price"
                  style={{
                    fontWeight: '100',
                    borderTop: '1px solid #ccc',
                    padding: '10px 0',
                    margin: '10px auto',
                  }}
                >
                  <span
                    itemprop="priceCurrency"
                    content="DKK"
                    style={{
                      fontWeight: '500',
                      verticalAlign: 'top',
                      letterSpacing: '2px',
                      marginRight: '8px',
                    }}
                  >
                    DKK
                  </span>
                  <span
                    itemprop="price"
                    style={{
                      fontSize: '3.5em',
                      letterSpacing: '2px',
                    }}
                  >
                    {price.ticketPrice}
                  </span>
                  <sub style={{ fontSize: '16px' }}>{price.percentage}</sub>
                  <span
                    style={{
                      display: 'block',
                      letterSpacing: '2px',
                    }}
                  >
                    {serviceFee}
                  </span>
                </div>
                <a
                  href="https://billetfix.dk/event/create_event/"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    style={{
                      padding: '10px 15px',
                    }}
                  >
                    {' '}
                    {buttonText}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  </WindowHelper>
)

export default TicketPrice
