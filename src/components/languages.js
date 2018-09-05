import React from 'react'
import { EnglishIcon } from './icons/englishIcon'
import { DanishIcon } from './icons/danishIcon'
import Logos from './soc-med-icons'
import { WindowHelper } from '../components/helpers'

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            background: '#f7f7f7',
            padding: '100px 6%',
            position: 'relative',
          }}
          id="teaser"
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
              Language support
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
              Everything is in both English and Danish.
            </p>
          </div>
          <div
            className="icon"
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: '33%',
              padding: '0 10px',

              ...(window.width > 680
                ? {}
                : {
                    display: 'none',
                  }),
            }}
          >
            <EnglishIcon />
            <span
              style={{
                margin: '10px',
                fontSize: '120px',
              }}
            >
              /
            </span>
            <DanishIcon />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}
export default Teaser
