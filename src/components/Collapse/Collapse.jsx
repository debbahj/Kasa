import PropTypes from 'prop-types'
import './Collapse.css'

const Collapse = ({ title, children }) => {
  return (
    <details className="collapse">
      <summary className="collapse__title">
        {title}
        <i className="collapse__icon fas fa-chevron-up"></i>
      </summary>
      <div className="collapse__content">
        {children}
      </div>
    </details>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Collapse
