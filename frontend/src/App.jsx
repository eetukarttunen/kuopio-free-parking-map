import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './Map.jsx'
import Navigation from './Navigation.jsx'
import SidePanel from './components/SidePanel.jsx'

function App() {


  return (
    <>
      <SidePanel />
      <Map />
    </>
  )
}

export default App
