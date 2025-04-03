import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './Map.jsx'
import Navigation from './Navigation.jsx'


function App() {


  return (
    <>
        <Navigation/>
        <Map/>
    </>
  )
}

export default App
