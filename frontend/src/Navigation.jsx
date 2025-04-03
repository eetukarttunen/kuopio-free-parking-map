import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Navigation.css'
import logo from '/kuopio-free-parking.png';


function Navigation() {


  return (
    <nav className="navigation-container">
      <div className="navigation">
        <img src={logo} height="50px" alt="Logo" />
      </div>
    </nav>
  )
}

export default Navigation
