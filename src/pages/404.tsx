import React, { FunctionComponent } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="404: Page Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
