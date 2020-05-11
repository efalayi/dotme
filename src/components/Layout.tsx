import React, { ReactElement } from 'react'

import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'

type LayoutProps = {
  children: {}
}

function Layout({ children }: LayoutProps): ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <div className="site-page flex-container flex-container--col">
      <Header />
      <main>{children}</main>
      <Footer year={currentYear} />
    </div>
  )
}

export default Layout
