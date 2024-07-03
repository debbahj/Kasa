import './Footer.css'
const logo = '/assets/images/logo-footer.svg'

function Footer() {
  return (
    <div className="footer__container">
      <img className="footer__logo" src={logo} alt="Logo de Kasa" />
      <p className="footer__copyright">&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
