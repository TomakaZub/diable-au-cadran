import React, { useContext } from "react"
import FirebaseContext from "../../../firebase/context"
import useCustomUx from "../../../utils/hooks/useCustomUx"
import { Link } from "react-scroll"
import "./style/style.css"

export const Pager = () => {
  const { appContext, setAppContext } = useContext(FirebaseContext)
  const customClass = useCustomUx()

  const handleClick = (sectionClicked) => {
    if (sectionClicked.id !== appContext.idActivSection) {
      setAppContext((prev) => {
        return {
          ...prev,
          isChanging: true,
          targetSection: sectionClicked,
        }
      })
    }
  }

  /**
   * Fonction qui permet de changer le context lorsqu'une section est active
   * @param {} sectionClicked
   */
  const handleSetActive = (section) => {
    // si la section active est celle qui été visée, alors isChanging: false
    if (section.id === appContext.targetSection.id) {
      setTimeout(() => {
        setAppContext((prev) => {
          return {
            ...prev,
            idActivSection: section.id,
            isChanging: false,
          }
        })
      }, 1000)
    }
    // sinon alors isChanging: reste à true
    else {
      setAppContext((prev) => {
        return {
          ...prev,
          idActivSection: section.id,
        }
      })
    }
  }

  const pagerPointsList = Object.keys(appContext.sections).map((key) => {
    return (
      <Link
        key={key}
        activeClass='active'
        to={`section${key}`}
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
        delay={2000}
        ignoreCancelEvents={true}
        onClick={() => handleClick(appContext.sections[key])}
        onSetActive={() => handleSetActive(appContext.sections[key])}
        // onSetInactive={() => {
        //   console.log(appContext.idActivSection)
        //   console.log(appContext.idTargetSection)
        //     console.log("onSetInactive")
        //     setTimeout(() => {
        //       setAppContext((prev) => {
        //         return {
        //           ...prev,
        //           isChanging: false,
        //         }
        //       })
        //     }, 500)
        //   }
        // }}
      >
        <li key={key} className={`pager section-${key}`} />
      </Link>
    )
  })

  return <ul className={`pager-item ${customClass}`}>{pagerPointsList}</ul>
}
