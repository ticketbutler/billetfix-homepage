import React from 'react'
import { SmileyHiIcon } from './icons/smileyHiIcon'
import Logos from './soc-med-icons'
import { WindowHelper } from '../components/helpers'
import { Button } from '../components/elements/elements'

const RightMockupFirst = ({ heading, strong_text, text, button_text }) => {
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
              {text}
            </p>
            <Button style={{ padding: '15px 10px', margin: '40px 20%' }}>
              {button_text}
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
export default RightMockupFirst
