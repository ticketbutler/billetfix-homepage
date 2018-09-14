import React from 'react'
import Link from 'gatsby-link'
import PrivacyPolicy from '../components/privacyPol'
import { Layout } from '../layouts/index'
import { WindowHelper } from '../components/helpers'

const PrivacyPolicyP = staticHeader => {
  return (
    <Layout staticHeader={staticHeader}>
      <PrivacyPolicy
        
      />
    </Layout>
  )
}

export default PrivacyPolicyP
