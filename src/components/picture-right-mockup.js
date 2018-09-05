import React from 'react'
import { SmileyHiIcon } from './icons/smileyHiIcon'
import Logos from './soc-med-icons'
import { WindowHelper } from '../components/helpers'
import { Button } from '../components/elements/elements'

let paragraphs = [
  "Regardsless if it's to the christmas lunch, intro trip or end of semester party, we have made it easy for students.",
  'Forget about complicated spreadsheets and time consuming sale in the breaks. Just do it online - for free!',
]
const Teaser = () => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            overflow: 'hidden',
            alignItems: 'center',
            boxPack: 'justify',
            background: '#fff',
            padding: '100px 6%',
            ...(window.width > 980
              ? {
                  display: 'flex',

                  justifyContent: 'space-between',
                }
              : {
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                }),
          }}
        >
          <div style={{ padding: '15px', maxWidth: '45%' }}>
            <h3
              style={{
                color: '#ff4a6e',
                margin: '.25em 0',
                fontWeight: '100',
                letterSpacing: '2px',
                ...(window.width > 980
                  ? {
                      fontSize: '30px',
                      lineHeight: '40px',
                    }
                  : {
                      fontSize: '22px',
                      lineHeight: '27px',
                    }),
              }}
            >
              Sell tickets from your own website
            </h3>
            <p
              style={{
                fontWeight: '500',
                padding: '15px 0',

                fontSize: '18px',
                lineHeight: '17px',
                ...(window.width > 980
                  ? {
                      fontSize: '18px',
                      lineHeight: '17px',
                    }
                  : {
                      fontSize: '16px',
                      lineHeight: '16px',
                    }),
              }}
            >
              Attendees can signup from your own website
            </p>
            <p
              style={{
                lineHeight: '20px',
                marginTop: '16px',
                fontSize: '16px',
                fontWeight: '100',
                letterSpacing: '1px',

                ...(window.width > 980
                  ? {
                      fontSize: '16px',
                      lineHeight: '17px',
                    }
                  : {
                      fontSize: '16px',
                      lineHeight: '27px',
                    }),
              }}
            >
              It's as easy as copy & paste to start selling tickets on your own
              website - and it's free!
            </p>
            <Button style={{ padding: '15px 10px', margin: '40px 20%' }}>
              view the live demo example
            </Button>{' '}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexFlow: 'row wrap ',
              minWidth: '33%',
            }}
          >
            <img
              style={{ height: '600px', width: 'auto', marginRight: '-140px' }}
              src="../img/madHatter.png"
              alt="madHatter "
            />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}
export default Teaser
