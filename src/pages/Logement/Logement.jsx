import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useFetchLogements from '../../hooks/api/fetchLogements'
import Collapse from '../../components/Collapse/Collapse'
import Slider from '../../components/Slider/Slider'
import './Logement.css'

const Logement = () => {
  const [logement, setLogement] = useState(null)
  const { id } = useParams()
  const { logementsData } = useFetchLogements()

  useEffect(() => {
    setLogement(logementsData.find((logement) => logement.id === id))
  }, [logementsData, id])

  return (
    <div className="logement">
      {logement && logement.pictures && (
        <div className="logement__slider">
          <Slider images={logement.pictures} />
        </div>
      )}
      {logement && (
        <div className="logement__container">
          <div className="logement__content">
            <div className="logement__info"></div>
            <div className="logement__profile"></div>
          </div>
          <div className="logement__collapse">
            <Collapse title={'Description'}>
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </div>
  )
}

export default Logement
