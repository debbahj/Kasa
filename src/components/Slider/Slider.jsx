import { useState } from 'react'
import PropTypes from 'prop-types'
import './Slider.css'

const Slider = ({ images }) => {
  const [imagesIndex, setimagesIndex] = useState(0)

  const goToPrev = () => {
    const isFirstSlide = imagesIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : imagesIndex - 1
    setimagesIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = imagesIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : imagesIndex + 1
    setimagesIndex(newIndex)
  }

  if (images.length < 1) {
    return null
  }

  return (
    <div className="slider-container">
      <img
        src={images[imagesIndex]}
        alt="alt texte"
        className="slider__image"
      />
      <span
        className="slider__arrow--left fas fa-chevron-left"
        onClick={goToPrev}
      ></span>
      <span
        className="slider__arrow--right fas fa-chevron-right"
        onClick={goToNext}
      ></span>
      {images.length > 0 && (
        <span className="slider__index">
          {imagesIndex + 1} / {images.length}
        </span>
      )}
    </div>
  )
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slider
