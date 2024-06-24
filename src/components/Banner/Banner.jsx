import PropTypes from 'prop-types'
import './Banner.css'

const Banner = ({ img, text }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={img} alt={text} />
      <div className="banner__overlay"></div>
      <div className="banner__title">{text}</div>
    </div>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Banner
