import React from 'react'
import Link from 'gatsby-link'
import abouts from '../__mocks__/about'
import About from '../components/about'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const AboutP = staticHeader => {
  return (
    <Layout staticHeader={staticHeader}>
      <About />
    </Layout>
  )
}

export default AboutP
