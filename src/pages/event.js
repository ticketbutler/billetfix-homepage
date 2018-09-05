import React from 'react'
import Link from 'gatsby-link'
import Event from '../components/create-event'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const CreateEventP = staticHeader => {
  return (
    <Layout>
      <Event />
    </Layout>
  )
}

export default CreateEventP
