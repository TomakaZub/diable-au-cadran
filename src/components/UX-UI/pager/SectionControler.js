import React, { useContext } from "react"
import FirebaseContext from "../../../firebase/context"
import useCustomUx from "../../../utils/hooks/useCustomUx"
import PropTypes from "prop-types"
import "./style/style.css"

export const SectionControler = (props) => {
  const { appContext, setAppContext } = useContext(FirebaseContext)
  const { getCurrentSlideIndex } = props
  const currentSlideIndex = getCurrentSlideIndex()
  const customClass = useCustomUx()

  const renderSlidesNumbers = (
    currentSlideIndex,
    classNameParam,
    displayLabel
  ) => {
    const { slidesCount, scrollToSlide } = props

    const handleClick = (i) => {
      if (appContext.isMenuOpen) {
        setAppContext((prev) => {
          return { ...prev, isMenuOpen: false, isChanging: true }
        })
      } else {
        setAppContext((prev) => {
          return { ...prev, isChanging: true }
        })
      }

      setTimeout(() => scrollToSlide(i), 1000)
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
          {displayLabel && appContext.sections[i].title}
        </div>
      )
    }
    return slidesNumbers
  }

  return (
    <>
      {/* MENU */}
      <div className={`main-menu ${customClass}`}>
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
      <div className={`pager-item ${customClass}`}>
        {renderSlidesNumbers(currentSlideIndex, "item", false)}
      </div>
    </>
  )
}

// SectionControler.propTypes = {
//   className: PropTypes.string,
//   getCurrentSlideIndex: PropTypes.func.isRequired,
//   onNext: PropTypes.func.isRequired,
//   onPrev: PropTypes.func.isRequired,
//   scrollToSlide: PropTypes.func.isRequired,
//   slidesCount: PropTypes.number.isRequired,
//   style: PropTypes.object,
// }
