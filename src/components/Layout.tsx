import React, { ReactElement } from 'react'

import Footer from './Footer'

import '../styles/site.scss'

const defaultProps = {
  showFooter: false,
}

type LayoutProps = {
  children: {}
} & typeof defaultProps

function Layout(props: LayoutProps): ReactElement {
  const { children, showFooter } = props
  const currentYear = new Date().getFullYear()

  return (
    <div className="site">
      <main>{children}</main>
      {showFooter && <Footer year={currentYear} />}
    </div>
  )
}

export default Layout
Layout.defaultProps = defaultProps
