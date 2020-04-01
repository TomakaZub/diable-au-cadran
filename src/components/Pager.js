import React, { useContext } from "react"
import FirebaseContext from "../firebase/context"
import { Link } from "react-scroll"
import "../style/pager.css"

export const Pager = () => {
  const { appContext, setAppContext } = useContext(FirebaseContext)

  const sections = appContext.sections

  /**
   * Permet de savoir si la section cible est inférieure à l'actuelle
   * Fonction utile pour contourner le décalage sur le pager et la class 'isChanging'
   * (l'eventListenner pour gérer la class active se base sur le haut de la page)
   * @param {*} section
   */
  const isTargetSmaller = section => {
    console.log(section)
    const currentSection = sections.find(() => {
      return appContext.idActivSection
    })

    if (section.tech.order > currentSection.tech.order) {
      return true
    } else {
      return false
    }
  }

  const pagerPointsList = Object.keys(sections).map(key => {
    return (
      <Link
        key={key}
        activeClass='active'
        to={`section${key}`}
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        delay={1000}
        onClick={() =>
          setAppContext(prev => {
            return {
              ...prev,
              idActivSection: sections[key].id,
              isChanging: true
            }
          })
        }
        onSetInactive={() => {
          if (!isTargetSmaller(sections[key])) {
            setAppContext(prev => {
              return {
                ...prev,
                isChanging: false
              }
            })
          } else {
            setTimeout(() => {
              setAppContext(prev => {
                return {
                  ...prev,
                  isChanging: false
                }
              })
            }, 1000)
          }
        }}
      >
        <li key={key} className={`pager section-${key} `} />
      </Link>
    )
  })

  return <ul className='pager-item'>{pagerPointsList}</ul>
}
