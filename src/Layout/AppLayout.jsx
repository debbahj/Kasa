import PropTypes from 'prop-types'
import './AppLayout.css'

const AppLayout = ({ header, main, footer }) => {
  return (
    <div className="app-layout">
      <div className="wrapper">
        <header className='header'>{header}</header>
        <main>{main}</main>
      </div>
      <footer className="footer">{footer}</footer>
    </div>
  )
}

AppLayout.propTypes = {
  header: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
}

export default AppLayout
