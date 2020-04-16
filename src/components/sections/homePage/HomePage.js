import React from "react"
import Scroller from "../../UX-UI/scroller/Scroller"
import MouseTracker from "../../UX-UI/mouseTracker/MouseTracker"

import "./style/style.css"

/**
 * Home page du site
 */
const HomePage = ({ section, filterFx, isChanging }) => {
  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} homePage`}
      >
        <div className={`section-container ${filterFx}`}></div>
        <MouseTracker />
        <Scroller />
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(HomePage)
