import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import './Home.css'
import useFetchLogements from '../../hooks/api/fetchLogements'

function Home() {
  const { logementsData } = useFetchLogements()
  return (
    <div className="home">
      <Banner
        className={'darken'}
        img={'./assets/images/banner-image.svg'}
        text="Chez vous, partout et ailleurs"
      />
      {logementsData && (
        <div className="card-container">
          {logementsData.map((data) => (
            <Card key={data.id} link={`logement/${data.id}`} title={data.title} image={data.cover} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
