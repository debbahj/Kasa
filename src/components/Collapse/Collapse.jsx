import PropTypes from 'prop-types'
import './Collapse.css'

const Collapse = ({ title, children, small = false }) => {
  return (
    <details className="collapse">
      <summary
        className={'collapse__title' + (small ? ' collapse__small' : '')}
      >
        {title}
        <i className="collapse__icon fas fa-chevron-up"></i>
      </summary>
      <div className="collapse__content">{children}</div>
    </details>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
}

export default Collapse
