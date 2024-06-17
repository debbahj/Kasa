import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner />
      <h1>content</h1>
      <Footer />
    </div>
  )
}

export default Home
