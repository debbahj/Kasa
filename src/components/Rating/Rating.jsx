import PropTypes from 'prop-types'
import './Rating.css'

const ARRAY = [0, 1, 2, 3, 4]
const classEmpty = 'fas fa-star empty'
const classFilled = 'fas fa-star filled'
const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {ARRAY.map((index) => (
        <i key={index} className={rating > index ? classFilled : classEmpty} />
      ))}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Rating
