import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.css'
import useFetchAbout from '../../hooks/api/fetchAbout'

function About() {
  const { aboutData } = useFetchAbout()

  return (
    <div className="about-wrapper">
      <Banner
        lessDarken={true}
        img={'./assets/images/banner-image-about.svg'}
        text={''}
      />
      {aboutData && (
        <div className="collapse-container">
          {aboutData.map((data, index) => (
            <Collapse key={`about-content-${index}`} title={data.title}>
              <p>{data.content}</p>
            </Collapse>
          ))}
        </div>
      )}
    </div>
  )
}

export default About
