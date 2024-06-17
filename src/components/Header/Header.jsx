import { Link } from "react-router-dom"


function Header() {
  return (
    <header>
      <h1><img src="./vite.svg" alt="" />KASA</h1>

      <nav>
        <ul>
          <li><Link to={"/"}>Accueil</Link></li>
          <li><Link to={"/about"}>A Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
