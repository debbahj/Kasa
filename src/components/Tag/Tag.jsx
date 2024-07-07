import './Tag.css'
import PropTypes from 'prop-types'

const Tag = ({ tag }) => {
  return (
    <button className="tag" type="button">
      {tag}
    </button>
  )
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default Tag
