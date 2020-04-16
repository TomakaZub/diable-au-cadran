import React, { useState, useEffect, useContext } from "react"

import FirebaseContext from "../../../firebase/context"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const Service = ({ section, isChanging, filterFx }) => {
  const { appContext } = useContext(FirebaseContext)
  const [isActiv, setIsActiv] = useState(false)

  useEffect(() => {
    console.log(section)
    if (appContext.idActivSection === section.id) {
      setIsActiv(true)
    } else setIsActiv(false)
  }, [appContext.idActivSection])

  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} service`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className='bg-bloc'>
            <div className='content'>{addLineBreaks(section.content1)}</div>
            <h2 class={`${isActiv ? "anim-title activ" : "anim-title"}`}>
              <span>100% artisanal</span>
              <span>Découvrez l'atelier !</span>
            </h2>
            <div className='content'>{addLineBreaks(section.content2)}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(Service)
