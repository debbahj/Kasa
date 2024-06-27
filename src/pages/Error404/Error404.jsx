import { NavLink } from 'react-router-dom'
import './Error404.css'

function Error404() {
  return (
    <div className="error-404">
      <img
        className="error-404__img"
        src="./assets/images/404.svg"
        alt="Page introuvable"
      />
      <p className="error-404__text">
        Oups! La page que <br /> vous demandez n&apos;existe pas.
      </p>
      <NavLink to="/" className="error-404__link">
        Retourner sur la page d&apos;accueil
      </NavLink>
    </div>
  )
}

export default Error404
