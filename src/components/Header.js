import React, { useContext, useEffect, useState } from "react"
import Menu from "./menu"
import FirebaseContext from "../firebase/context"
import useBackground from "./../utils/hooks/useBackground"

import "../style/header.css"

const Header = () => {
  const { appContext } = useContext(FirebaseContext)
  const [hidden, setHidden] = useState("")

  useEffect(() => {
    console.log(appContext.idActivSection)

    if (appContext.idActivSection === "AtGmnYMf2Dbn5wsOlNcr") {
      setHidden("hidden")
    } else setHidden("")
  }, [appContext.idActivSection])

  return (
    <div className='header'>
      <Menu />
      <div className={`site-name ${hidden}`}>Le diable au cadran.</div>
    </div>
  )
}

export default Header
