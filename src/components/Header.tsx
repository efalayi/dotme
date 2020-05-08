import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

const defaultProps = {
  siteTitle: `View the source`,
}

type HeaderProps = { description: string } & typeof defaultProps

function Header(props: HeaderProps): ReactElement {
  const { description, siteTitle } = props
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            {siteTitle}
          </Link>
        </h1>
        <h6>{description}</h6>
      </div>
    </header>
  )
}

export default Header
Header.defaultProps = defaultProps
