import React, { useContext } from "react"
import FirebaseContext from "../../firebase/context"
import Scroller from "../Scroller"

import "../../style/section.css"

const Section2 = ({ section }) => {
  const { appContext } = useContext(FirebaseContext)

  if (section) {
    return (
      <div className={`section section${section.tech.order}`}>
        <div className={appContext.isChanging ? "change isChanging" : "change"}>
          <div>{section.title}</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section2
