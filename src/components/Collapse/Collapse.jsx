import { useState } from 'react'
import PropTypes from 'prop-types'
import './Collapse.css'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={handleClick} type="button">
        <p className="collapse__title">{title}</p>
        <i className={`collapse__icon fas fa-chevron-up ${isOpen ? 'anim-rotate' : ''}`}></i>
      </button>
      {isOpen && <div className={`collapse__content ${isOpen ? 'anim-open' : ''}`}>{content}</div>}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
}

export default Collapse

// Un bouton booleen qui affiche un texte (radio ?)
// Avec le titre a gauche et l'icone a droite (space-between ?)
// l'icone rotate a gauche quand cliquer (rotate ?)
// le texte apparait avec une animation du haut vers le bas quand cliquer et inversement (opacity ? translate ?)
