import React, { useState, useEffect } from "react"
// import ReactPageScroller from "react-page-scroller"
import firebase, { FirebaseContext } from "./firebase"
import Loading from "./components/UX-UI/loading/Loading"
import HomePage from "./components/sections/homePage/HomePage"
import Service from "./components/sections/service/Service"
import SavoirFaire from "./components/sections/savoirFaire/SavoirFaire"
import Contact from "./components/sections/contact/Contact"
import { Pager } from "./components/UX-UI/pager/Pager"
import Header from "./components/header/Header"

import "./style/common.css"

// Context de l'application
const INITIAL_CONTEXT = {
  isChanging: false, // si l'utilisateur change de section
  isMenuOpen: false, // si l'utilisateur ouvre la section
  idActivSection: "t6bys0zleWutaW74BnTu", // id de la première section
  sections: {}, // obj avec les objets des sections
  globalSettings: {},
}

export const App = () => {
  const [appContext, setAppContext] = useState(INITIAL_CONTEXT)

  /**
   * Met à jour le context (sections) avec les données reçues de firebase.
   * Injection des sections dans le context.
   * @param {*} snapshot
   */
  const updateSectionsContextWithFirebase = (snapshot) => {
    let count = 0
    const sections = snapshot.docs.map((doc) => {
      const section = {
        id: doc.id, // on ajoute l'identifiant du document dans la section
        isActive: count === 0 ? true : false, // on ajoute la possibilité de savoir si la section est active ou non
        ...doc.data(), // on ajoute le reste des données
      }
      count++
      return section
    })

    setAppContext((prev) => {
      return { ...prev, sections: sections }
    })
  }

  /**
   * Met à jour le context (globalSettings) avec les données reçues de firebase.
   * Injection des sections dans le context.
   * @param {*} snapshot
   */
  const updateGlobalSettingsContextWithFirebase = (snapshot) => {
    const settings = snapshot.docs.map((doc) => {
      return doc.data()
    })

    setAppContext((prev) => {
      return { ...prev, globalSettings: settings }
    })
  }

  /**
   * Met à jour le context avec les données (firebase).
   */
  useEffect(() => {
    const getSections = async () => {
      firebase.db
        .collection("sections")
        .orderBy("tech.order", "asc")
        .onSnapshot(updateSectionsContextWithFirebase)
    }

    const getGlobalSettings = async () => {
      firebase.db
        .collection("global")
        .onSnapshot(updateGlobalSettingsContextWithFirebase)
    }

    const doIt = () => {
      getSections()
      getGlobalSettings()
    }
    return doIt()
  }, [])

  if (!appContext.sections.length) {
    return <Loading />
  } else {
    return (
      <FirebaseContext.Provider value={{ appContext, setAppContext, firebase }}>
        <Header />
        <Pager />
        <div className='sections'>
          {/* <ReactPageScroller
          customPageNumber={this.state.currentPage}
          > */}
          <HomePage section={appContext.sections[0]} />
          <Service section={appContext.sections[1]} />
          <SavoirFaire section={appContext.sections[2]} />
          <Contact section={appContext.sections[3]} /> */}
          {/* </ReactPageScroller> */}
        </div>
      </FirebaseContext.Provider>
    )
  }
}
