import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Logement from '../pages/Logement/Logement'
import Error404 from '../pages/Error404/Error404'
import AppLayout from '../Layout/AppLayout'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout
                header={<Header />}
                main={<Outlet />}
                footer={<Footer />}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="logement/:id" element={<Logement />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div //TODO: DELETE
        id="debug"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100px',
          height: '28px',
          border: '1px solid yellow',
          padding: '4px',
          borderRadius: '4px',
        }}
      ></div>
    </div>
  )
}

export default Router
