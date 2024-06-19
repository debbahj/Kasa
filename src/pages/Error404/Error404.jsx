import { Link } from 'react-router-dom'

function Error404() {
  return (
    <Link
      to="https://www.google.fr/maps"
      target="_blank"
      rel="noopener noreferrer"
    >
      ARE YOU LOST ?
    </Link>
  )
}

export default Error404
