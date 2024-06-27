import PropTypes from 'prop-types'
import './Collapse.css'

const Collapse = ({ title, content }) => {
  return (
    <details className="collapse">
      <summary className="collapse__title">
        {title}
        <i className="collapse__icon fas fa-chevron-up"></i>
      </summary>
      <div className="collapse__content">
        <p>{content}</p>
      </div>
    </details>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Collapse
