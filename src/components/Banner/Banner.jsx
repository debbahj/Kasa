import PropTypes from 'prop-types'
import './Banner.css'

const Banner = ({ img, text, className }) => {
  return (
    <div className="banner">
      <img className={'banner__img' + ' ' + className} src={img} alt={text} />
      <div className="banner__title">{text}</div>
    </div>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Banner
