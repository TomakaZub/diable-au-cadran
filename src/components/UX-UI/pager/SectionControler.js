import React, { useContext } from "react"
import FirebaseContext from "../../../firebase/context"
import PropTypes from "prop-types"
import "./style/style.css"

export const SectionControler = (props) => {
  const { appContext, setAppContext } = useContext(FirebaseContext)
  const { getCurrentSlideIndex, classNameMenu, classNamePager } = props
  const currentSlideIndex = getCurrentSlideIndex()

  const renderSlidesNumbers = (
    currentSlideIndex,
    classNameParam,
    displayLabel
  ) => {
    const { slidesCount, scrollToSlide } = props

    const handleClick = (i) => {
      appContext.isMenuOpen &&
        setAppContext((prev) => {
          return { ...prev, isMenuOpen: false }
        })

      scrollToSlide(i)
    }

    const slidesNumbers = []
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        className: classNameParam,
        key: i,
        onClick: () => handleClick(i),
      }
      slidesNumbers.push(
        <div {...buttonProps}>
          {displayLabel && appContext.sections[i].title}.
        </div>
      )
    }
    return slidesNumbers
  }

  return (
    // MENU
    <>
      {/* MENU */}
      <div className={classNameMenu}>
        <div
          className={
            appContext.isMenuOpen ? "list-item-menu open" : "list-item-menu"
          }
        >
          {renderSlidesNumbers(currentSlideIndex, "item-menu", true)}
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
      {/* PAGER */}
      <div className={classNamePager}>
        {renderSlidesNumbers(currentSlideIndex, "section-page", false)}
      </div>
    </>
  )
}

SectionControler.propTypes = {
  className: PropTypes.string,
  getCurrentSlideIndex: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  scrollToSlide: PropTypes.func.isRequired,
  slidesCount: PropTypes.number.isRequired,
  style: PropTypes.object,
}

SectionControler.defaultProps = {
  classNamePager: "pager-item",
  classNameMenu: "main-menu",
}
