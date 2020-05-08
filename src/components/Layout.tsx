import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import './layout.css'

type LayoutProps = {
  children: {}
}

function Layout({ children }: LayoutProps): ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        description="Sample Header"
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <footer>
          {`© ${currentYear},Built with `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
