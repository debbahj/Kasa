import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useFetchLogements from '../../hooks/api/fetchLogements'
import Collapse from '../../components/Collapse/Collapse'
import Slider from '../../components/Slider/Slider'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'

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
      {logement && logement.pictures && <Slider images={logement.pictures} />}
      {logement && (
        <div className="logement__container">
          <div className="logement__content">
            <div className="logement__info">
              <div className="logement__info--text">
                <h1 className="logement__info--title">{logement.title}</h1>
                <p className="logement__info--location">{logement.location}</p>
              </div>
              <div className="logement__info--tags">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
            <div className="logement__profile">
              <div className="logement__profile--host">
                <div className="logement__profile--host-name">
                  {logement.host.name.split(' ').map((name) => (
                    <p className="firstupper" key={`name-${name}`}>
                      {name}
                    </p>
                  ))}
                </div>
                <img
                  className="logement__profile--host-img"
                  src={logement.host.picture}
                  alt={logement.host.name}
                />
              </div>
              <Rating rating={+logement.rating} maxRating={5} />
            </div>
          </div>
          <div className="logement__collapse">
            <Collapse title={'Description'} small>
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Équipements" small>
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
