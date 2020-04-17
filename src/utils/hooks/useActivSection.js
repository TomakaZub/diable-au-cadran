import React, { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

const useActivSection = (section) => {
  const { appContext } = useContext(FirebaseContext)
  const [isActiv, setIsActiv] = useState()

  useEffect(() => {
    if (appContext.idActivSection === section.id) {
      setIsActiv("activ-section")
    } else setIsActiv("")
  }, [appContext.idActivSection])

  return isActiv
}

export default useActivSection
