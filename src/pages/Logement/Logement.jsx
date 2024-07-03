import { useParams } from 'react-router-dom'
import useFetchLogements from '../../hooks/api/fetchLogements'
import Slider from '../../components/Slider/Slider'
import './Logement.css'
import { useEffect, useState } from 'react'

const Logement = () => {
  const [logement, setLogement] = useState(null)
  const { id } = useParams()
  const { logementsData } = useFetchLogements()

  useEffect(() => {
    setLogement(logementsData.find((logement) => logement.id === id))
  }, [logementsData, id])

  return (
    <>
      {logement && logement.pictures && (
        <div className="logement">
          <Slider images={logement.pictures} />
        </div>
      )}
    </>
  )
}

export default Logement
