import React from 'react'

import { WindowHelper } from '../components/helpers'

import CopyBox from '../components/copyBox'
const RightMockupSecond = ({ heading, strong_text, copyBoxLink }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            overflow: 'hidden',
            alignItems: 'center',
            boxPack: 'justify',
            background: '#f7f7f7',
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
          <div
            style={{
              padding: '15px',

              ...(window.width > 980 ? { maxWidth: '45%' } : {}),
            }}
          >
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
            {copyBoxLink && <CopyBox link={copyBoxLink} />}
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
              style={{
                height: '600px',
                width: 'auto',
                ...(window.width > 980
                  ? {
                      marginRight: '-305px',
                    }
                  : { marginRight: '0' }),

                objectFit: 'cover',
              }}
              src="../img/ticketHatter.png"
              alt="madHatter "
            />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}
export default RightMockupSecond
