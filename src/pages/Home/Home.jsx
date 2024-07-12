import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import './Home.css'
import useFetchLogements from '../../hooks/api/fetchLogements'
import PropTypes from 'prop-types'

const HomeLayout = ({ banner, cards }) => {
  return (
    <div className="home">
      <div className="banner">{banner}</div>
      <div className="card-container">{cards}</div>
    </div>
  )
}

HomeLayout.propTypes = {
  banner: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
}

function Home() {
  const { logementsData } = useFetchLogements()
  return (
    <HomeLayout
      banner={
        <Banner
          text="Chez vous, partout et ailleurs"
          img={'./assets/images/banner-image.svg'}
        />
      }
      cards={
        <>
          {logementsData.map((data) => (
            <Card
              key={`logement-${data.id}`}
              link={`logement/${data.id}`}
              title={data.title}
              image={data.cover}
            />
          ))}
        </>
      }
    />
  )
}

export default Home
