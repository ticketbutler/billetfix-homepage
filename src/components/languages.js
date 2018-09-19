import React from 'react'
import { WindowHelper } from '../components/helpers'

const Languages = ({ heading, strong_text }) => {
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
              {heading}
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
              {strong_text}
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
            <img
              src="../img/danishFlag.svg"
              style={{
                width: '100px',
                height: 'auto',
              }}
            />
            <span
              style={{
                margin: '10px',
                fontSize: '120px',
              }}
            >
              /
            </span>
            <img
              src="../img/danishFlag.svg"
              style={{
                width: '100px',
                height: 'auto',
              }}
            />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}
export default Languages
