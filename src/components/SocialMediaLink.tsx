import React, { ReactElement } from 'react'

type LinkProps = {
  id: string
  text: string
  url: string
}

function SocialMediaLink(props: LinkProps): ReactElement {
  const { id, text, url } = props
  return (
    <a href={url} id={id} className="social-link">
      {text}
    </a>
  )
}

export default SocialMediaLink
