import React from 'react'
import { WindowHelper } from '../components/helpers'
import { CouponIcon } from './icons/coupon'
const pictureLeftSecond = ({ heading, text }) => {
  return (
    <WindowHelper>
      {window => (
        <section
          style={{
            alignItems: 'center',
            boxPack: 'justify',
            background: '#f7f7f7',
            padding: '100px 6%',
            ...(window.width > 980
              ? {
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                }
              : {
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                }),
          }}
        >
          <div style={{ padding: '15px' }}>
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
                      textAlign: 'right',
                    }
                  : {
                      textAlign: 'left',
                      fontSize: '22px',
                      lineHeight: '27px',
                    }),
              }}
            >
              {heading}
            </h3>

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
                      textAlign: 'right',
                    }
                  : {
                      fontSize: '16px',
                      lineHeight: '27px',
                      textAlign: 'left',
                    }),
              }}
            >
              {text}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexFlow: 'row wrap ',
              minWidth: '33%',
              padding: '0 10px',
            }}
          >
            {' '}
            <img src="../img/coupon.svg" alt="payment " />
          </div>
        </section>
      )}
    </WindowHelper>
  )
}

export default pictureLeftSecond
