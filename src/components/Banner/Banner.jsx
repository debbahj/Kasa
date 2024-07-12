import PropTypes from 'prop-types'
import './Banner.css'

const Banner = ({ img, text, lessDarken = false }) => {
  return (
    <div className="banner">
      <img
        className={
          'banner__img' + ' ' + (lessDarken ? 'less-darken' : 'darken')
        }
        src={img}
        alt={text}
      />
      <div className="banner__title">{text}</div>
    </div>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  lessDarken: PropTypes.bool,
}

export default Banner
