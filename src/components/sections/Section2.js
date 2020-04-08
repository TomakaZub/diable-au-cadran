import React, { useContext, useEffect, useState } from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import FirebaseContext from "../../firebase/context"
import { addLineBreaks } from "../../utils/textUtil"

import "../../style/section.css"

const Section2 = ({ section }) => {
  const { appContext } = useContext(FirebaseContext)

  const [_className, set_className] = useState("")

  useEffect(() => {
    if (appContext.isMenuOpen) {
      set_className("section menuIsOpen")
    } else if (appContext.isChanging) {
      set_className("section isChanging")
    } else set_className("section")
  }, [appContext.isMenuOpen, appContext.isChanging])

  if (section) {
    return (
      <div className={`section${section.tech.order} ${_className}`}>
        <div className={appContext.isChanging ? "change isChanging" : "change"}>
          <ParallaxProvider>
            <Parallax x={[100, 0]} tagOuter='figure'>
              <div
                className={
                  appContext.isMenuOpen
                    ? "profil-picture menuIsOpen"
                    : "profil-picture"
                }
              ></div>
            </Parallax>
            <Parallax
              className={
                appContext.isMenuOpen ? "content menuIsOpen" : "content"
              }
              x={[0, 0]}
              tagOuter='figure'
            >
              <h4>{addLineBreaks(section.content)}</h4>
            </Parallax>
          </ParallaxProvider>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section2
