import React from "react"
import "./style/style.css"
import useBackground from "../../../utils/hooks/useBackground"
import useTransition from "../../../utils/hooks/useTransition"
import Component from "./SavoirFaire"

const SavoirFaire = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()
  return (
    <Component section={section} filterFx={filterFx} isChanging={isChanging} />
  )
}

export default SavoirFaire
