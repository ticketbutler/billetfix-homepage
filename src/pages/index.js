import React from 'react'

class Index extends React.Component {
  componentDidMount() {
    this.changeDirectory()
  }
  changeDirectory() {
    if (typeof window !== 'undefined') {
      let userLang = window.navigator.language || window.navigator.userLanguage
      if (userLang === 'da-DA') {
        window.location.href = '/da/'
      } else {
        window.location.href = '/en/'
      }
    }
  }
  render() {
    return <div />
  }
}
export default Index
