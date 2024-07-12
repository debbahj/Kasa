import { useState } from 'react'
import PropTypes from 'prop-types'
import './Slider.css'

const Slider = ({ defaultIndex = 0, images }) => {
  const [index, setIndex] = useState(Math.min(defaultIndex, images.length - 1))

  const goToPrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1)
  }

  const goToNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1)
  }

  if (images.length < 1 || !images[index]) {
    return null
  }

  return (
    <div className="slider-container">
      <img src={images[index]} alt="alt texte" className="slider__image" />
      {images.length > 1 && (
        <>
          <span
            className="slider__arrow--left fas fa-chevron-left circle-shadow"
            onClick={goToPrev}
          />
          <span
            className="slider__arrow--right fas fa-chevron-right circle-shadow"
            onClick={goToNext}
          />
          {images.length > 0 && (
            <span className="slider__index">
              {index + 1} / {images.length}
            </span>
          )}
        </>
      )}
    </div>
  )
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultIndex: PropTypes.number,
}

export default Slider
