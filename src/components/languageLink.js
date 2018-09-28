import React from 'react'

import { WindowHelper } from '../components/helpers'

class LanguageLink extends React.Component {
  state = {
    hovered: false,
  }
  hoveredTimeout = null

  render() {
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
                    // marginLeft: '8px',
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
              style={{
                display: 'flex',

                ...(window.width > 980
                  ? { marginLeft: '0' }
                  : { marginLeft: '-33px' }),
                ...(this.props.fadeHeader
                  ? window.scrollY >= 10
                    ? {
                        color: 'black',
                      }
                    : {
                        color: 'white',
                      }
                  : {
                      color: 'black',
                    }),
              }}
              onMouseOver={() => {
                if (this.hoveredTimeout) clearTimeout(this.hoveredTimeout)
                this.setState({ hovered: true })
              }}
              onMouseLeave={() => {
                this.hoveredTimeout = setTimeout(() => {
                  this.setState({ hovered: false })
                }, 1000)
              }}
            >
              <span
                style={{
                  marginRight: '10px',
                }}
              >
                {this.props.currentLanguage.label}
              </span>
              <span>
                <img
                  itemprop="image"
                  alt="current-language-icon"
                  src={this.props.currentLanguage.icon}
                  style={{ height: '20px' }}
                />
              </span>
            </div>
            <li
              id="anotherLanguage"
              className={this.state.hovered ? 'visible' : ''}
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
                      right: '2.2%',
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
              <div>
                {this.props.otherLanguages.map(language => {
                  return (
                    <a href={language.link} style={{ textDecoration: 'none' }}>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          display: 'flex',
                          padding: '9px 0',
                        }}
                      >
                        <span style={{ color: 'black', marginRight: '6px' }}>
                          {language.label}
                        </span>
                        <img
                          itemprop="image"
                          alt="other-language-icon"
                          src={language.icon}
                          style={{
                            display: 'inline-block',

                            width: '30px',
                            height: '20px',
                          }}
                        />
                      </span>
                    </a>
                  )
                })}
              </div>
            </li>
          </li>
        )}
      </WindowHelper>
    )
  }
}
export default LanguageLink
