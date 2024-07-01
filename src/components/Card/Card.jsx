import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ title, image }) => {
  return (
      <a href="" className='card__link'>
        <div className="card">
          <img className="card__image" src={image} alt={title} />
          <p className="card__title">{title}</p>
        </div>
      </a>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

// TODO: <a> en <NabLink> ? vers quoi ? id ? ou definir dans <Home/> ?
// TODO: Max-height 100vh met un outline (a voir en 4K sur browser)

export default Card
