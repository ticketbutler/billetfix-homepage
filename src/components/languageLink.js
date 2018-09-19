import React from 'react'

import { WindowHelper } from '../components/helpers'

const LanguageLink = ({ currentLanguage, otherLanguages }) => {
  return (
    <WindowHelper>
      {window => (
        <li
          style={{
            textDecoration: 'none',
            transition: 'all 0.5s',
            cursor: 'pointer',
            display: 'inline-block',
            ...(window.width > 980
              ? {
                  marginLeft: '16px',
                  fontSize: '13px',
                  color: '#f7f7f7',
                  marginLeft: '8px',
                  fontWeight: '500',
                  padding: '0 10px',
                }
              : {
                  marginLeft: '21px',
                  padding: '15px 20px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#333',
                  display: 'block',
                }),
          }}
        >
          <div
            onMouseOver={() => {
              document.getElementById('danishDiv').classList.toggle('visible')
            }}
          >
            <span>{currentLanguage.label}</span>
            <span>
              <img
                src={currentLanguage.icon}
                style={{ height: '20px', marginLeft: '-27px' }}
              />
            </span>
          </div>

          <div
            id="danishDiv"
            style={{
              cursor: 'pointer',
              ...(window.width > 980
                ? {
                    opacity: '0',
                    visibility: 'hidden',
                    position: ' absolute',
                    display: 'inline-block',
                    padding: '3px 15px',
                    transform: 'translate(-50%)',
                    cursor: 'pointer',
                    boxShadow: ' 0 1px 7px 2px rgba(0,0,0,.2)',
                    top: '65px',
                    right: '4.8%',
                    background: '#fff',
                    transition: 'all .25s',
                  }
                : {
                    marginLeft: '-33px',
                    padding: '15px 20px',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#333',
                    display: 'block',
                    marginTop: '10px',
                  }),
            }}
          >
            <span
              style={{
                whiteSpace: 'nowrap',
                display: 'block',
                padding: '5px 0',
              }}
            >
              <span style={{ color: 'black', marginRight: '6px' }}>
                {otherLanguages.label}
              </span>
              <img
                src={otherLanguages.icon}
                style={{
                  display: 'inline-block',

                  width: '30px',
                  height: '20px',
                }}
              />
            </span>
          </div>
        </li>
      )}
    </WindowHelper>
  )
}
export default LanguageLink
