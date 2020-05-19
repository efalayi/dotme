import React, { ReactElement } from 'react'

import Stack from './Stack'
import Image from './Image'

function Header(): ReactElement {
  return (
    <header className="grid-container grid-container--header">
      <div className="intro">
        <div className="img-container">
          <Image fileName="ef.jpg" alt="Esther Falayi" />
        </div>
        <div className="description">
          <h3>Hi,</h3>
          <p>I am Esther Falayi.</p>
          <p>A Software Developer at Andela.</p>
          <p>
            And I love everything that revolves around UI/UX and frontend
            development.
          </p>
        </div>
      </div>
      <Stack />
    </header>
  )
}

export default Header
