import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
      <img className="footer__logo" src="./vite.svg" alt="Kasa" width={120} height={40} />
      <p className="footer__copyright">&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
