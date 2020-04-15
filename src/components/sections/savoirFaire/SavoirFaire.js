import React from "react"
import useBackground from "../../../utils/hooks/useBackground"
import useTransition from "../../../utils/hooks/useTransition"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const SavoirFaire = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()
  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} savoirFaire`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className='profil-picture'>
            <div className='picture'></div>
          </div>

          <div className='savoir-faire'>{addLineBreaks(section.content)}</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default SavoirFaire
