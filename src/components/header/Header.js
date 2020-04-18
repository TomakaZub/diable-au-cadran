import React, { useContext, useEffect, useState } from "react"
import Menu from "../menu"
import FirebaseContext from "../../firebase/context"

import "./style/style.css"

const Header = () => {
  const { appContext } = useContext(FirebaseContext)
  const [hidden, setHidden] = useState("")

  const siteName =
    appContext.globalSettings.length && appContext.globalSettings[0].siteName

  useEffect(() => {
    // On cache le nom du site lorsqu'on est sur la section "contact"
    if (appContext.idActivSection === appContext.sections[3].id) {
      setHidden("hidden")
    } else setHidden("")
  }, [appContext.idActivSection])

  return (
    <div className='header'>
      <Menu />
      <div className={`site-name ${hidden}`}>{siteName}</div>
    </div>
  )
}

export default Header
