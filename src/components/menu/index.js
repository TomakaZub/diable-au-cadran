import React, { useContext } from "react"
import FirebaseContext from "../../firebase/context"
import "./style/style.css"

import { Menu as Component } from "./Menu"

const Menu = () => {
  const { appContext, setAppContext } = useContext(FirebaseContext)

  return <Component setAppContext={setAppContext} appContext={appContext} />
}

export default Menu
