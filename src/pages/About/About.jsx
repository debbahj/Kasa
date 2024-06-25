import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import { aboutData } from './aboutData'
import './About.css'

function About() {
  return (
    <div className="about-wrapper">
      <Banner
        className={'less-darken'}
        img={'./assets/images/banner-image-about.svg'}
        text={''}
      />
      <div className="collapse-container">
        {aboutData.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  )
}

export default About
