import React from "react"
import useBackground from "./../../utils/hooks/useBackground"
import useTransition from "./../../utils/hooks/useTransition"
import Scroller from "../Scroller"
import MouseTracker from "../MouseTracker"

import "../../style/section.css"
import "../../style/mouseTracker.css"

const Section0 = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()

  if (section) {
    return (
      <div className={`section section${section.tech.order} ${isChanging}`}>
        <div className={`section-container ${filterFx}`}></div>
        <MouseTracker />
        <Scroller />
      </div>
    )
  } else {
    return null
  }
}

export default Section0
