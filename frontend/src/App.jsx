import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MapContainer, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

function App() {
  const latitude = 62.8938994150319;
  const longitude = 27.676290599660508;
  const mapOptions = {
    center: [latitude, longitude],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  return (
    <>
      <MapContainer {...mapOptions} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  )
}

export default App
