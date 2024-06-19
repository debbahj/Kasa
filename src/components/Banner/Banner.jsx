import './Banner.css'

const Banner = ({ img, text }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={img} alt={text} />
      <div className="banner__overlay"></div>
      <div className="banner__title">{text}</div>
    </div>
  )
}

export default Banner
