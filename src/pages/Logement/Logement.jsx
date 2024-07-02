import { useParams } from 'react-router-dom'
import useFetchLogements from '../../hooks/api/fetchLogements'
import Slider from '../../components/Slider/Slider'
import './Logement.css'

const Logement = () => {
  const { id } = useParams()
  const { logementsData } = useFetchLogements()

  return (
    { logementsData } && (
      <div className="logement">
        <Slider
          image={logementsData.cover}
        />
      </div>
    )
  )
}

export default Logement
