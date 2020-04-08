import React from "react"
import Menu from "./menu"

import "../style/header.css"

const Header = () => {
  return (
    <div className='header'>
      <Menu />
      <div className='site-name'>Le diable au cadran.</div>
    </div>
  )
}

export default Header
