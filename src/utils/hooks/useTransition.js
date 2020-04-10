import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

const useTransition = () => {
  const { appContext } = useContext(FirebaseContext)
  const [cssClass, setCssClass] = useState("")

  useEffect(() => {
    const cssClass = appContext.isChanging ? "isChanging" : ""
    setCssClass(cssClass)
  }, [appContext.isChanging])

  return cssClass
}

export default useTransition
