import './Header.scss'
import { NavLink } from 'react-router-dom'
const logo = '/assets/images/logo.svg'

function Header() {
  return (
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo de Kasa" />

        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header
