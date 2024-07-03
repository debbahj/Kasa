import PropTypes from 'prop-types'
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({ link, title, image }) => {
  return (
    <NavLink to={link} className="card__link">
      <div className="card">
        <img className="card__image" src={image} alt={title} />
        <p className="card__title">{title}</p>
      </div>
    </NavLink>
  )
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card
