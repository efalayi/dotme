import React, { ReactElement } from 'react'

import SocialMediaLink from './SocialMediaLink'

type FooterProps = {
  year: number
}

function Footer(props: FooterProps): ReactElement {
  const { year } = props

  return (
    <div className="grid-container social-media">
      <div className="social-media--header">
        <h3>You can find me on: </h3>
      </div>
      <SocialMediaLink
        id="facebook"
        text="facebook"
        iconClassName="fa-facebook"
        url="https://www.facebook.com/efalayi"
      />
      <SocialMediaLink
        id="github"
        text="github"
        iconClassName="fa-github"
        url="https://github.com/efalayi"
      />
      <SocialMediaLink
        id="medium"
        text="medium"
        iconClassName="fa-medium"
        url="https://medium.com/@estherfalayi"
      />
      <SocialMediaLink
        id="twitter"
        text="twitter"
        iconClassName="fa-twitter"
        url="https://twitter.com/Hadass_112"
      />

      <footer>
        <ul>
          <li>Esther Falayi</li>
          <li>&copy; {year}</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
