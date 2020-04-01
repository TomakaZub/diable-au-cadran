import React, { useState, useEffect, useContext } from "react"
import FirebaseContext from "../../firebase/context"
import Section from "./Section0"

const Sections = () => {
  const { appContext } = useContext(FirebaseContext)

  if (appContext.sections.length) {
    const sections = appContext.sections
    return Object.keys(sections).map(key => (
      <Section key={sections[key].id} section={sections[key]} />
    ))
  }
  return null
}

export default Sections
