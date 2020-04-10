import React from "react"
import useBackground from "./../../utils/hooks/useBackground"
import useTransition from "./../../utils/hooks/useTransition"
import { addLineBreaks } from "../../utils/textUtil"

import "../../style/section.css"

const Section1 = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()

  if (section) {
    return (
      <div
        id='section1'
        className={`section section${section.tech.order} ${isChanging}`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className='trapezoid-left'>
            <div className='content'>{addLineBreaks(section.content)}</div>
          </div>
          <div className='trapezoid-right'></div>
          <div className='section-title'>
            <h2>{section.title}</h2>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section1
