import React, { useState, useEffect } from "react"
import Header from "./components/header/Header"
import { FullPage, Slide } from "react-full-page"
import firebase, { FirebaseContext } from "./firebase"
import Loading from "./components/UX-UI/loading/Loading"
import HomePage from "./components/sections/homePage/"
import Service from "./components/sections/service/"
import SavoirFaire from "./components/sections/savoirFaire"
import Contact from "./components/sections/contact/"
import { SectionControler } from "./components/UX-UI/pager/SectionControler"

import "./style/common.css"
import "./style/section.css"

// Context de l'application
const INITIAL_CONTEXT = {
  isChanging: false, // si l'utilisateur change de section
  isMenuOpen: false, // si l'utilisateur ouvre la section
  idActivSection: "t6bys0zleWutaW74BnTu", // id de la première section
  targetSection: {},
  sections: {}, // obj avec les objets des sections
  globalSettings: {},
}

export const App = () => {
  const [appContext, setAppContext] = useState(INITIAL_CONTEXT)

  /**
   * Met à jour l'id de la section active dans le context
   * @param {from, to} index de départ et d'arrivé
   */
  const afterChange = ({ to }) => {
    const idActivSection = appContext.sections[to].id
    setAppContext((prev) => {
      return {
        ...prev,
        idActivSection: idActivSection,
        isChanging: false,
      }
    })

    // if (appContext.isMenuOpen) {
    //   setAppContext((prev) => {
    //     return { ...prev, isMenuOpen: false, isChanging: true }
    //   })
    // } else {
    //   setAppContext((prev) => {
    //     return { ...prev, isChanging: true }
    //   })
  }

  /**
   * Met à jour le context (sections) avec les données reçues de firebase.
   * Injection des sections dans le context.
   * @param {*} snapshot
   */
  const updateSectionsContextWithFirebase = (snapshot) => {
    const sections = snapshot.docs.map((doc) => {
      const section = {
        id: doc.id, // on ajoute l'identifiant du document dans la section
        ...doc.data(), // on ajoute le reste des données
      }
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
    document.documentElement.style.setProperty("--my-variable-name", "pink")

    return (
      <FirebaseContext.Provider value={{ appContext, setAppContext, firebase }}>
        <Header />
        <div className='sections'>
          <FullPage
            controls={SectionControler}
            duration={1500}
            afterChange={afterChange}
          >
            <Slide>
              <HomePage section={appContext.sections[0]} />
            </Slide>
            <Slide>
              <Service section={appContext.sections[1]} />
            </Slide>
            <Slide>
              <SavoirFaire section={appContext.sections[2]} />
            </Slide>
            <Slide>
              <Contact section={appContext.sections[3]} />
            </Slide>
          </FullPage>
        </div>
      </FirebaseContext.Provider>
    )
  }
}
