import './Header.scss'
import { NavLink } from 'react-router-dom'
import Dcn from '../HOC/displayClassName/DisplayClassName' //! TODO: DEL + BALISE <Dcn> EN DESSOUS
const logo = './assets/images/logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo de Kasa" />

        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>
              <Dcn>
                <NavLink to="/">Accueil</NavLink>
              </Dcn>
            </li>
            <li>
              <Dcn>
                <NavLink to="/about">A Propos</NavLink>
              </Dcn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
