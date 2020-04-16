import React from "react"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const Service = ({ section, isChanging, filterFx }) => {
  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} service`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className='trapezoid-left'>
            <div className='content'>{addLineBreaks(section.content)}</div>
          </div>
          <div className='trapezoid-right'></div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(Service)
