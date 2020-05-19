import React, { ReactElement } from 'react'

type LinkProps = {
  id: string
  text: string
  iconClassName: string
  url: string
}

function SocialMediaLink(props: LinkProps): ReactElement {
  const { id, iconClassName, text, url } = props
  return (
    <div className="grid-item">
      <div id={id} className="platform grid-center">
        <i className={`fa ${iconClassName} fa-3x`} aria-hidden="true" />
      </div>
      <div className="platform--overlay grid-center">
        <a href={url}>{text}</a>
      </div>
    </div>
  )
}

export default SocialMediaLink
