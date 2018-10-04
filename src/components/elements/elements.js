import React from 'react'

export class Button extends React.Component {
  static defaultProps = { style: {} }
  state = { hover: false }

  render() {
    let { style, children, ...props } = this.props
    return (
      <button
        style={{
          letterSpacing: '3px',
          padding: '16px 17px',
          margin: '0',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          fontSize: '15px',
          border: '1px solid #ff4a6e',
          transition: 'all .15s',
          outline: 'none',
          textTransform: 'uppercase',
          cursor: 'pointer',
          ...style,
          ...(this.state.hover
            ? {
                background: 'white',
                color: '#ff4a6e',
              }
            : {
                background: '#ff4a6e',
                color: '#fff',
              }),
        }}
        onMouseEnter={() => {
          this.setState({ hover: true })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false })
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
}

export class Switch extends React.Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState(({ on }) => ({ on: !on }))
  }
  render() {
    return this.props.children({
      ...this.state,
      toggle: this.toggle,
    })
  }
}
