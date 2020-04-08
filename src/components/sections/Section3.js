import React, { useContext } from "react"
import FirebaseContext from "../../firebase/context"

import "../../style/section.css"

const Section3 = ({ section }) => {
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

export default Section3
