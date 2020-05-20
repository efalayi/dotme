import React, { FunctionComponent } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMediaLink from '../components/SocialMediaLink'

const IndexPage: FunctionComponent = () => {
  return (
    <Layout showFooter>
      <SEO title="Home" />
      <div className="site__content">
        <h1>Esther Falayi</h1>
        <div className="social-links">
          <SocialMediaLink
            id="github"
            url="https://github.com/efalayi"
            text="github"
          />
          <SocialMediaLink
            id="linkedin"
            url="https://www.linkedin.com/in/esther-falayi/"
            text="linkedin"
          />
          <SocialMediaLink
            id="medium"
            url="https://medium.com/@estherfalayi"
            text="medium"
          />
          <SocialMediaLink
            id="instagram"
            url="https://www.instagram.com/estherfalayi/"
            text="instagram"
          />
          <SocialMediaLink
            id="twitter"
            url="https://twitter.com/irefunmi"
            text="twitter"
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
