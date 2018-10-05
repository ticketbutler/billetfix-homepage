import React from 'react'

import { WindowHelper } from '../components/helpers'
import 'font-awesome/css/font-awesome.min.css'
import * as emailjs from 'emailjs-com'
class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
  }

  render() {
    return (
      <WindowHelper>
        {window => {
          let style = {
            icons: {
              display: 'inline',
              float: 'left',
              fontSize: '20px',
              marginLeft: '-13px',
            },
            contactTitles: {
              display: 'block',

              width: '250px',
              textAlign: 'left',
              fontSize: '25px',
              fontWeight: '400',
              marginBottom: '10px',
              ...(window.width > 980
                ? { marginLeft: '30px' }
                : { marginLeft: '30px', fontSize: '20px' }),
            },
            contactText: {
              letterSpacing: '1px',
              display: 'inherit',
              textAlign: 'left',
              marginLeft: '30px',
              marginTop: '0px',
              marginBottom: '0px',
              width: '250px',
              fontWeight: '300',
              ...(window.width > 980
                ? { fontSize: '18px' }
                : { fontSize: '16px' }),
            },
          }

          return (
            <section
              style={{
                clear: 'both',
                textAlign: 'center',

                background: '#fff',
                color: 'white',
              }}
            >
              <div
                style={{
                  ...(window.width > 980
                    ? {
                        position: 'absolute',
                        paddingTop: '90px',
                        width: '50%',
                        float: 'left',
                      }
                    : {
                        display: 'block',
                        width: '100%',
                        paddingBottom: '112px',
                      }),
                }}
              >
                <h1
                  style={{
                    fontWeight: '200',
                    color: 'black',
                    lineHeight: '1.5em',
                    letterSpacing: '3px',
                    marginBottom: '10px',
                    marginTop: '0',
                    ...(window.width > 980
                      ? {
                          fontSize: '50px',
                        }
                      : {
                          fontSize: '28px',
                        }),
                  }}
                >
                  {this.props.heading}
                </h1>
                {!this.state.sent ? (
                  <div style={{ height: '544px', marginTop: '70px' }}>
                    <div
                      style={{
                        margin: '0 auto',
                        width: '80%',
                      }}
                    >
                      <h1
                        style={{
                          color: 'black',
                          fontSize: '23px',
                          fontWeight: '400',
                        }}
                      >
                        {this.props.sentMessage1}
                      </h1>
                      <h3
                        style={{
                          color: 'gray',
                          fontSize: '18px',
                          fontWeight: '400',
                        }}
                      >
                        {this.props.sentMessage2}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={e => {
                      e.preventDefault()
                      var service_id = 'default_service'
                      var template_id = 'template_rh9CGeWC'
                      emailjs.init('user_5iBC1plyOvnbe2sl2azWQ')
                      emailjs.send(service_id, template_id, {
                        name: this.state.name,
                        email: this.state.email,
                        message: this.state.message,
                      })
                      this.setState({
                        sent: true,
                      })
                    }}
                  >
                    <label
                      for="send-address"
                      style={{
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '17px',
                        fontWeight: '100',
                        color: '#333',
                      }}
                    >
                      {this.props.formHeadingName}
                    </label>
                    <input
                      required
                      id="name"
                      maxLength="256"
                      name="name"
                      type="text"
                      value={this.state.name}
                      onChange={e => {
                        this.setState({ name: e.target.value })
                      }}
                      style={{
                        display: 'block',
                        margin: '10px auto',
                        maxWidth: '300px',
                        width: '300px',
                        border: '1px solid rgba(255,74,110,.5)',
                        borderRadius: '3px',
                        padding: '10px 15px',
                        outline: '#000',
                        fontSize: 'inherit',
                      }}
                    />

                    <label
                      for="send-address"
                      style={{
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '17px',
                        fontWeight: '100',
                        color: '#333',
                      }}
                    >
                      {this.props.formHeadingEmail}
                    </label>
                    <input
                      required
                      id="send-address"
                      maxLength="256"
                      name="send address"
                      type="email"
                      value={this.state.email}
                      onChange={e => {
                        this.setState({ email: e.target.value })
                      }}
                      style={{
                        display: 'block',
                        margin: '10px auto',
                        maxWidth: '300px',
                        width: '300px',
                        border: '1px solid rgba(255,74,110,.5)',
                        borderRadius: '3px',
                        padding: '10px 15px',
                        outline: '#000',
                        fontSize: 'inherit',
                      }}
                    />
                    <label
                      for="message"
                      style={{
                        fontWeight: '100',
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '17px',
                        color: '#333',
                      }}
                    >
                      {this.props.formHeadingMessage}
                    </label>
                    <textarea
                      required
                      id="message"
                      rows="10"
                      value={this.state.F}
                      onChange={e => {
                        this.setState({ message: e.target.value })
                      }}
                      style={{
                        outline: 'none',
                        width: '90%',
                        maxWidth: ' 400px',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        margin: '10px',
                        lineHeight: 'inherit',
                        border: '1px solid rgba(255,74,110,.5)',
                        borderRadius: '3px',
                        padding: '.5em .75em',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        letterSpacing: '2px',
                        borderColor: '#ff4a6e',
                        display: 'block',
                        background: '#ff4a6e',
                        color: '#fff',
                        borderRadius: '2px',
                        margin: ' auto',
                        cursor: 'pointer',
                        padding: '10px 25px',
                        outline: 'none',
                        textAlign: 'center',
                        fontWeight: '300',
                        fontSize: '13px',
                        border: '1px solid #ff4a6e',

                        transition: 'all .15s',
                      }}
                    >
                      SEND!
                    </button>
                  </form>
                )}
              </div>
              <div
                style={{
                  backgroundColor: 'rgb(255, 74, 110)',

                  ...(window.width > 980
                    ? {
                        width: '50%',
                        float: 'right',
                        height: '690px',
                        padding: '110px',
                      }
                    : {
                        display: 'block',
                        width: '100%',
                        padding: '90px 40px',
                        height: '550px',
                      }),
                }}
              >
                <div>
                  <div
                    style={{
                      ...(window.width > 980
                        ? { marginLeft: '40px' }
                        : { marginLeft: '0' }),
                    }}
                  >
                    <div
                      style={{
                        display: 'block',

                        ...(window.width > 980
                          ? {
                              margin: '30px auto',
                              width: '340px',
                            }
                          : window.width > 450
                            ? {
                                margin: '0 60px',
                              }
                            : {
                                margin: '0 18px',
                              }),
                      }}
                    >
                      <i className="fa fa-map-marker" style={style.icons} />
                      <p style={style.contactTitles}>
                        {this.props.headingAddress}{' '}
                      </p>
                      <p style={style.contactText} id="address">
                        {this.props.textAddressStreet}
                      </p>
                      <p style={style.contactText}>
                        {this.props.textAddressCity}
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'block',

                        ...(window.width > 980
                          ? {
                              width: '340px',
                              margin: '50px auto',
                            }
                          : window.width > 450
                            ? {
                                margin: '50px 60px',
                              }
                            : { margin: '50px 18px' }),
                      }}
                    >
                      <i className="fa fa-phone" style={style.icons} />
                      <p style={style.contactTitles}>
                        {this.props.headingPhone}
                      </p>
                      <p style={style.contactText}>{this.props.textPhone}</p>
                    </div>
                    <div
                      style={{
                        display: 'block',

                        ...(window.width > 980
                          ? {
                              margin: '50px auto',
                              width: '340px',
                            }
                          : window.width > 450
                            ? {
                                margin: '50px 60px',
                              }
                            : { margin: '50px 18px' }),
                      }}
                    >
                      <i className="fa fa-envelope" style={style.icons} />
                      <p style={style.contactTitles}>
                        {this.props.headingEmail}
                      </p>
                      <p style={style.contactText} id="support">
                        {this.props.textEmail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }}
      </WindowHelper>
    )
  }
}

export default Contact
