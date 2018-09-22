import React from 'react'

class CopyBox extends React.Component {
  inputRef = React.createRef()

  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            boxAlign: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <input
            ref={this.inputRef}
            style={{
              textAlign: 'left',
              margin: '15px 0',
              padding: '7px 10px',
              maxWidth: '405px',
              fontSize: '16px',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
              userSelect: 'all',
              border: '1px solid rgba(255,74,110,.5)',
              width: '90%',
            }}
            type="url"
            id="demo-event"
            value={this.props.link}
            class="link"
            readonly="true"
          />
          <div
            onClick={() => {
              this.inputRef.current.select()
              document.execCommand('copy')
            }}
            style={{
              zIndex: '3',
              display: 'flex',
              alignItems: 'center',
              height: '30px',
              width: '30px',
              margin: '0',
              position: 'relative',
              border: '1px solid hsla(0,0%,97%,.5)',
              marginLeft: '-1px',
              backgroundColor: 'rgba(255,74,110,.2)',
            }}
          >
            <svg
              style={{
                width: '65%',
                height: '65%',
                pointerEvents: 'none',
                marginLeft: '6px',
              }}
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="200px"
              height="200px"
              viewBox="-93 -92 200 200"
              enable-background="new -93 -92 200 200"
            >
              <path
                d="M-57.107,65.696H-5.82v12.82h-51.287V65.696z M7-11.232h-64.107V1.59H7V-11.232z M32.644,27.233V1.59L-5.82,40.054
	l38.464,38.463V52.874H96.75V27.233H32.644z M-25.053,14.41h-32.054v12.823h32.054V14.41z M-57.107,52.874h32.054v-12.82h-32.054
	V52.874z M58.286,65.696h12.82V91.34c-0.25,3.593-1.401,6.66-3.843,8.978c-2.443,2.303-5.396,3.593-8.978,3.843H-69.928
	c-7.049,0-12.822-5.771-12.822-12.82V-49.697c0-7.049,5.772-12.821,12.822-12.821h38.464c0-14.229,11.412-25.642,25.644-25.642
	c14.229,0,25.641,11.413,25.641,25.642h38.466c7.05,0,12.82,5.772,12.82,12.821V14.41h-12.82v-38.463H-69.928V91.34H58.286V65.696z
	 M-57.107-36.875H45.464c0-7.049-5.771-12.822-12.82-12.822H19.82C12.771-49.697,7-55.468,7-62.518C7-69.567,1.229-75.34-5.82-75.34
	c-7.05,0-12.823,5.772-12.823,12.822c0,7.05-5.771,12.821-12.821,12.821h-12.822C-51.335-49.697-57.107-43.924-57.107-36.875z"
              />
            </svg>

            <span
              style={{
                position: 'absolute',
                left: '2.5em',
                top: '2px',
                opacity: '0',
                transition: 'all .25s;',
              }}
              class="copied"
            >
              copied!
            </span>
          </div>
        </div>
        {/* <Logos /> */}
      </div>
    )
  }
}
export default CopyBox
