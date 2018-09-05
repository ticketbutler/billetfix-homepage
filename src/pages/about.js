import React from 'react'
import Link from 'gatsby-link'
import abouts from '../__mocks__/about'
import Article from '../components/article'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const AboutP = staticHeader => {
  return (
    <Layout>
      <Article />
    </Layout>
  )
}

export default AboutP
