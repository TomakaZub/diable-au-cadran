import React, { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"
import Scroller from "../Scroller"
import MouseTracker from "../MouseTracker"

import "../../style/section.css"
import "../../style/mouseTracker.css"

const Section0 = ({ section }) => {
  const { appContext } = useContext(FirebaseContext)

  const [menuClass, setMenuClass] = useState("red-pic")

  useEffect(() => {
    if (appContext.isMenuOpen) {
      setMenuClass("nb-pic")
    } else {
      setMenuClass("red-pic")
    }
  }, [appContext.isMenuOpen])

  if (section) {
    return (
      <div className={`section section${section.tech.order}  main-container `}>
        <Scroller />
        <div
          className={
            appContext.isChanging
              ? `change isChanging bg-pic ${menuClass}`
              : `change bg-pic ${menuClass}`
          }
        >
          <MouseTracker />
          <Scroller />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section0
