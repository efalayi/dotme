import React, { ReactElement } from 'react'

function Stack(): ReactElement {
  return (
    <div className="stack">
      <div className="flex-container">
        <div id="html5" className="tool flex-item">
          html5
        </div>
        <div id="stylesheets" className="tool flex-item">
          css
        </div>
        <div id="javascript" className="tool flex-item">
          javascript
        </div>
        <div id="react" className="tool flex-item">
          react
        </div>
        <div id="node" className="tool flex-item">
          node
        </div>
        <div id="webpack" className="tool flex-item">
          webpack
        </div>
      </div>
    </div>
  )
}

export default Stack
