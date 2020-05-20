import React, { ReactElement } from 'react'

type FooterProps = {
  year: number
}

function Footer(props: FooterProps): ReactElement {
  const { year } = props

  return (
    <footer className="site__footer">
      <p>&copy; {year}</p>
    </footer>
  )
}

export default Footer
