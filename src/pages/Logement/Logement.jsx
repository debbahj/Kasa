import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useFetchLogements from '../../hooks/api/fetchLogements'
import Collapse from '../../components/Collapse/Collapse'
import Slider from '../../components/Slider/Slider'
import Tag from '../../components/Tag/Tag'
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
            <div className="logement__info">
              <h1 className="logement__info--title">{logement.title}</h1>
              <p className="logement__info--location">{logement.location}</p>
              <div className="logement__info--tags">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
            <div className="logement__profile">
              <div className="logement__profile--host">
                <div className="logement__profile--host-name">
                  <p>{logement.host.name.split(' ')[0]}</p>
                  <p>{logement.host.name.split(' ')[1]}</p>
                </div>
                <img
                  className="logement__profile--host-img"
                  src={logement.host.picture}
                  alt={logement.host.name}
                />
              </div>
              <div className="logement__profile--host-rating">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${
                      index < logement.rating ? 'filled' : 'empty'
                    }`}
                  ></i>
                ))}
              </div>
            </div>
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
