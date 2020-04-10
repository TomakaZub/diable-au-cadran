import React, { useState, useEffect } from "react"
import firebase, { FirebaseContext } from "./firebase"
import ReactPageScroller from "react-page-scroller"
import { FullPage, Slide } from "react-full-page"
import Loading from "./components/Loading"
import Sections from "./components/sections/Sections"
// import Scroller from "./components/Scroller"
import Section0 from "./components/sections/Section0"
import SectionBonus from "./components/sections/SectionBonus"
import Section1 from "./components/sections/Section1"
import Section2 from "./components/sections/Section2"
import Section3 from "./components/sections/Section3"
import { Pager } from "./components/Pager"
import Header from "./components/Header"

import "./style/common.css"

const INITIAL_CONTEXT = {
  isChanging: false,
  isMenuOpen: false,
  idActivSection: "t6bys0zleWutaW74BnTu",
  sections: {},
}

export const App = () => {
  const [appContext, setAppContext] = useState(INITIAL_CONTEXT)
  const [currentSection, setCurrentSection] = useState(0)
  const [cssContainer, setCssContainer] = useState()

  const cssGenerator = (key) => {
    const axeY = (key / 2) * -100
    const css = {
      transition: "transform 700ms ease 500ms",
      backfaceVisibility: "hidden",
      transform: `translate3d(0px, ${axeY}%, 0px)`,
    }
    setCssContainer(css)
  }

  useEffect(() => {
    handlePageChange(currentSection)
  }, [currentSection])

  // useEffect(() => {
  //   const scrollTo = async e => {
  //     setAppContext(prev => {
  //       return { ...prev, isChanging: true, idActivSection: sections[key].id }
  //     })
  //   }
  //   window.addEventListener("scroll", scrollTo)

  //   return () => window.removeEventListener("scroll", scrollTo)
  // }, [])

  /**
   * Met à jour le context avec les données reçues de firebase.
   * Injection des sections dans le context.
   * @param {*} snapshot
   */
  const updateContextWithFirebase = (snapshot) => {
    let count = 0
    const sectionsWithAppContext = snapshot.docs.map((doc) => {
      const section = {
        id: doc.id,
        isActive: count === 0 ? true : false,
        ...doc.data(),
      }
      count++
      return section
    })

    setAppContext((prev) => {
      return { ...prev, sections: sectionsWithAppContext }
    })
  }

  /**
   * Met à jour le context avec la database (firebase).
   */
  useEffect(() => {
    const getSections = () => {
      firebase.db
        .collection("sections")
        .orderBy("tech.order", "asc")
        .onSnapshot(updateContextWithFirebase)
    }
    return getSections()
  }, [firebase])

  const handlePageChange = (key) => {
    if (appContext.sections.length) {
      setAppContext((prev) => {
        return { ...prev, idActivSection: appContext.sections[key].id }
      })
    }
  }
  if (!appContext.sections[0]) {
    return <Loading />
  } else {
    return (
      // insertion du context --> Provider / Consumers>
      <FirebaseContext.Provider value={{ appContext, setAppContext, firebase }}>
        <Header />
        <Pager />
        <div className='sections' style={cssContainer}>
          <Section0 section={appContext.sections[0]} />
          {/* <SectionBonus section={appContext.sections[0]} /> */}
          <Section1 section={appContext.sections[1]} />
          <Section2 section={appContext.sections[2]} />
          <Section3 section={appContext.sections[3]} />
        </div>
      </FirebaseContext.Provider>
    )
  }
}
