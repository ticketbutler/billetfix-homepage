import React from 'react'
import Link from 'gatsby-link'
import QNA from '../components/qna'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const FAQP = staticHeader => {
  return (
    <Layout staticHeader={staticHeader}>
      <QNA />
    </Layout>
  )
}

export default FAQP
