import React from 'react'

import { WindowHelper } from '../components/helpers'

import { FBIcon } from './icons/fbIcon'

const Footer = ({ links }) => {
  return (
    <WindowHelper>
      {window => (
        <footer
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            textAlign: 'center',
            justifyContent: 'space-between',
            backgroundColor: ' #f7f7f7',
            width: '100%',
          }}
        >
          {links.filter(({ type }) => type === 'leftSection').map(data => (
            <div
              style={{
                fontWeight: '100',
                lineHeight: '20px',
                fontSize: '13px',
                letterSpacing: '1px',
                textAlign: 'left',
                padding: '25px',
                marginLeft: '92px',

                ...(window.width > 980
                  ? {}
                  : {
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                    }),
              }}
            >
              <p style={{ margin: '0' }}> {data.line1}</p>
              <a
                style={{ color: '#ff4a6e', textDecoration: 'none' }}
                href={data.linkTicketbutler}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.linkText}
              </a>
              <span> {data.cvr}</span>
            </div>
          ))}
          <div
            style={{
              fontWeight: '700',
              fontSize: '14px',
              textAlign: 'center',
              lineHeight: '1.8em',
              letterSpacing: '1px',
              ...(window.width > 980
                ? {}
                : {
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                  }),
            }}
          >
            <ul
              style={{
                listStyleType: 'none',

                margin: '0',
                padding: '25px',
                minWidth: '300px',
              }}
              className="middle-column"
            >
              {links
                .filter(({ type }) => type === 'centerSection')
                .map(data => (
                  <li>
                    <a
                      style={{
                        color: '#ff4a6e',
                        textDecoration: 'none',
                        fontSize: '16px',
                      }}
                      href={data.link}
                    >
                      {data.caption}
                    </a>
                  </li>
                ))}
              {links.filter(({ type }) => type === 'icon').map(data => (
                <li>
                  <FBIcon />
                  <a
                    style={{
                      color: '#ff4a6e',
                      textDecoration: 'none',
                    }}
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.caption}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              textAlign: 'right',
              listStyleType: 'none',
              marginRight: '92px',
              padding: '25px',
              minWidth: '300px',
              ...(window.width > 980
                ? {}
                : {
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                  }),
            }}
            className="right-column"
          >
            {links.filter(({ type }) => type === 'rightSection').map(data => (
              <p
                style={{
                  margin: '0',
                  fontWeight: '100',
                  lineHeight: '20px',
                  fontSize: '13px',
                  letterSpacing: '1px',
                }}
              >
                {data.text}
              </p>
            ))}

            {links
              .filter(({ type }) => type === 'rightSectionMail')
              .map(data => (
                <p
                  style={{
                    margin: '0',
                    fontWeight: '100',
                    lineHeight: '20px',
                    fontSize: '13px',
                    letterSpacing: '1px',
                  }}
                >
                  <a style={{ color: '#ff4a6e' }} href={data.href}>
                    {data.text}
                  </a>
                </p>
              ))}
          </div>
        </footer>
      )}
    </WindowHelper>
  )
}

export default Footer
