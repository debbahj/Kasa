import { useParams } from 'react-router-dom'
import useFetchLogements from '../../hooks/api/fetchLogements'

const Logement = () => {
  const { id } = useParams()
  const { logementsData } = useFetchLogements()

  return <div>Logement</div>
}

export default Logement
