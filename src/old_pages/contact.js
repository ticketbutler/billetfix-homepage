import React from 'react'
import Link from 'gatsby-link'

import Contact from '../components/contact'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const ContactP = staticHeader => {
  return (
    <Layout staticHeader={staticHeader}>
      <Contact />
    </Layout>
  )
}

export default ContactP
