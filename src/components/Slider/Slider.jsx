import PropTypes from 'prop-types'
import './Slider.css'

const Slider = ({ image, index }) => {
  return (
    <div className="slider-container">
      <img src={image} alt={image} className="slider__image" />
      <span className="slider__index">1/4{index}</span>
    </div>
  )
}

Slider.propTypes = {
  image: PropTypes.object,
  index: PropTypes.string,
}

export default Slider
