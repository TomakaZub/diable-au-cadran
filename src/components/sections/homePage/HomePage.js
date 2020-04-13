import React from "react"
import useBackground from "../../../utils/hooks/useBackground"
import useTransition from "../../../utils/hooks/useTransition"
import Scroller from "../../UX-UI/scroller/Scroller"
import MouseTracker from "../../UX-UI/mouseTracker/MouseTracker"

import "./style/style.css"

/**
 * Home page du site
 * @param {} param0
 */
const HomePage = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()

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

export default HomePage
