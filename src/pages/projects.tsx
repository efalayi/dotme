import React, { FunctionComponent } from 'react'
import { PageProps, Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ProjectsPage: FunctionComponent<PageProps> = (props: PageProps) => {
  const { path } = props
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to Projects ({path})</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default ProjectsPage
