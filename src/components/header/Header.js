import React, { useContext } from "react"
import Menu from "../menu"
import FirebaseContext from "../../firebase/context"
import useCustomUx from "../../utils/hooks/useCustomUx"

import "./style/style.css"

const Header = (listMenu, listPager) => {
  const { appContext } = useContext(FirebaseContext)
  const customClass = useCustomUx()

  const siteName =
    appContext.globalSettings.length && appContext.globalSettings[0].siteName

  return (
    <div className={`header ${customClass}`}>
      <div className='site-name'>{siteName}</div>
      {/* <Menu /> */}
    </div>
  )
}

export default Header
