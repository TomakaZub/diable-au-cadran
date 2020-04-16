import React, { useContext } from "react"
import FirebaseContext from "../../../firebase/context"
import { Link } from "react-scroll"
import "./style/style.css"

export const Pager = () => {
  const { appContext, setAppContext } = useContext(FirebaseContext)

  const handleClick = (sectionClicked) => {
    if (sectionClicked.id !== appContext.idActivSection)
      setAppContext((prev) => {
        return {
          ...prev,
          idActivSection: sectionClicked.id,
          isChanging: true,
        }
      })
  }

  const handleSetActive = (sectionClicked) => {
    setAppContext((prev) => {
      return {
        ...prev,
        idActivSection: sectionClicked.id,
      }
    })
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
        delay={1000}
        ignoreCancelEvents={true}
        onClick={() => handleClick(appContext.sections[key])}
        onSetActive={() => handleSetActive(appContext.sections[key])}
        onSetInactive={() => {
          setTimeout(() => {
            setAppContext((prev) => {
              return {
                ...prev,
                isChanging: false,
              }
            })
          }, 500)
        }}
      >
        <li key={key} className={`pager section-${key} `} />
      </Link>
    )
  })

  return <ul className='pager-item'>{pagerPointsList}</ul>
}
