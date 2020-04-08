import React, { useContext } from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import FirebaseContext from "../../firebase/context"
import { addLineBreaks } from "../../utils/textUtil"

import "../../style/section.css"

const Section1 = ({ section }) => {
  const { appContext } = useContext(FirebaseContext)

  if (section) {
    return (
      <div id='section1' className={`section section${section.tech.order}`}>
        <div className={appContext.isChanging ? "change isChanging" : "change"}>
          <ParallaxProvider>
            <div
              className={
                appContext.isMenuOpen
                  ? "trapezoid-left menuIsOpen"
                  : "trapezoid-left"
              }
            >
              <div className='content'>
                <Parallax x={[-80, 80]}>
                  {addLineBreaks(section.content)}{" "}
                </Parallax>
              </div>
            </div>
            <div className='trapezoid-right'></div>
            <Parallax y={[0, 0]} className='section-title'>
              <h2>{section.title}</h2>
            </Parallax>
          </ParallaxProvider>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section1
