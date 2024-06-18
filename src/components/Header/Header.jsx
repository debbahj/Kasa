import './Header.scss'
import logo from '../../assets/images/logo.svg'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
      <img className="header__logo" src={logo} alt="Logo de Kasa" />

      <nav className="header__nav">
        <ul className="header__nav--list">
          <li><Link to={"/"}>Accueil</Link></li>
          <li><Link to={"/about"}>A Propos</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header
