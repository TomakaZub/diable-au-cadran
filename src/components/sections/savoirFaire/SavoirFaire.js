import React from "react"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const SavoirFaire = ({ section, filterFx, isChanging, isActivSection }) => {
  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} ${isActivSection} savoirFaire`}
      >
        <div className={`section-container ${filterFx} `}>
          <div className={`left-bloc ${isActivSection}`}>
            {/* <div className='test'> */}
            <h1 className='title' data-text='ARTISAN'>
              ARTISAN
            </h1>
            {/* </div> */}
          </div>
          <div className={`right-bloc ${isActivSection}`}>
            <div className='savoir-faire'>{addLineBreaks(section.content)}</div>
            <div className='profil-picture'>
              <div className='picture'></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(SavoirFaire)
