import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Logement from './pages/Logement/Logement.jsx'
import Error404 from './pages/Error404/Error404.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)
