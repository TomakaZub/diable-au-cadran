import React from "react"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const SavoirFaire = ({ section, filterFx, isChanging }) => {
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

export default React.memo(SavoirFaire)
