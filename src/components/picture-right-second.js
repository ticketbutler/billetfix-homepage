import React from 'react'
import { Attendee } from './icons/attendeeIcon'
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
              Custom information about the attendee
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
              Do you want to know something during signup?
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
              Get all the information you would like with custom fields. What
              field of study? What year are you on? Is it the first time you
              attend? Just contact us here for help!
            </p>
          </div>
          <div
            className="icon"
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
            <Attendee />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}
export default Teaser
