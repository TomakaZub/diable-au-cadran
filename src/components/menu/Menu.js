import React from "react"
import { Link } from "react-scroll"

export const Menu = ({ setAppContext, appContext }) => {
  return (
    <div className={`main-menu`}>
      <div
        className={
          appContext.isMenuOpen ? "list-item-menu open" : "list-item-menu"
        }
      >
        <ul>
          {Object.keys(appContext.sections).map((key) => {
            const section = appContext.sections[key]
            return (
              <Link
                key={key}
                to={`section${key}`}
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                delay={1000}
                // onSetInactive={() => handleInactiv(section)}
              >
                <li
                  className={
                    appContext.idActivSection === section.id
                      ? "item-menu active"
                      : "item-menu"
                  }
                  // onClick={() => handleClick(section)}
                  key={section.id}
                >
                  {section.title + "."}
                </li>
              </Link>
            )
          })}
        </ul>
        <div className={"adress"}>
          <p>17 Rue de la Vicomte</p>
          <p>61200 Argentan</p>
        </div>
      </div>
      <div
        className={appContext.isOpenMenu ? "btn-menu open" : "btn-menu"}
        onClick={() =>
          setAppContext((prev) => {
            return {
              ...prev,
              isMenuOpen: !prev.isMenuOpen,
            }
          })
        }
      >
        <p className='menu'>menu.</p>
      </div>
    </div>
  )
}
