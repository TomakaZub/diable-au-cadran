import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

const useBackground = () => {
  const { appContext } = useContext(FirebaseContext)

  const [cssClass, setCssClass] = useState("")

  useEffect(() => {
    if (appContext.isMenuOpen || appContext.isChanging) {
      setCssClass("filterFx")
    } else setCssClass("")
  }, [appContext.isMenuOpen, appContext.isChanging])

  return cssClass
}

export default useBackground
