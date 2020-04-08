import React, { useContext } from "react"
import FirebaseContext from "../firebase/context"
import { Link } from "react-scroll"
import "../style/pager.css"

export const Pager = () => {
  const { appContext, setAppContext } = useContext(FirebaseContext)

  const sections = appContext.sections

  /**
   * Permet de savoir si la section cible est supérieure à l'actuelle
   * Fonction utile pour contourner le décalage sur le pager et la class 'isChanging'
   * (l'eventListenner pour gérer la class active se base sur le haut de la page)
   * @param {*} section
   */
  const isTargetBigger = (section) => {
    const currentSection = sections.find(() => {
      return appContext.idActivSection
    })

    if (section.tech.order > currentSection.tech.order) {
      return true
    } else {
      return false
    }
  }

  const pagerPointsList = Object.keys(sections).map((key) => {
    return (
      <Link
        key={key}
        activeClass='active'
        to={`section${key}`}
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
        delay={1000}
        onClick={() =>
          setAppContext((prev) => {
            return {
              ...prev,
              idActivSection: sections[key].id,
              isChanging: true,
            }
          })
        }
        onSetInactive={() => {
          // console.log(sections[key])
          if (isTargetBigger(sections[key])) {
            setTimeout(() => {
              setAppContext((prev) => {
                return {
                  ...prev,
                  isChanging: false,
                }
              })
            }, 500)
          } else {
            console.log("long")
            setTimeout(() => {
              setAppContext((prev) => {
                return {
                  ...prev,
                  isChanging: false,
                }
              })
            }, 2000)
          }
        }}
      >
        <li key={key} className={`pager section-${key} `} />
      </Link>
    )
  })

  return <ul className='pager-item'>{pagerPointsList}</ul>
}
