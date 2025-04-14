import './App.css'
import Map from './Map.jsx'
import SidePanel from './components/SidePanel.jsx'
import React, { useState } from 'react';

function App() {
  const [filterTime, setFilterTime] = useState('');  
  const [isOpen, setIsOpen] = useState(false);

  const geojsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.678362711363018, 62.89048415971304]
        },
        "properties": {
          "name": "P-Aapeli",
          "parking_time": "60",
          "address": "Minna Canthin katu 29, 70110 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.674580480543344, 62.890738544338646]
        },
        "properties": {
          "name": "P-Carlson",
          "parking_time": "120",
          "address": "Savonkatu 16, 70100 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.679123255528914, 62.88828658620317]
        },
        "properties": {
          "name": "P-Musiikkikeskus",
          "parking_time": "120",
          "address": "Kuopionlahdenkatu 23, 70100 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.676129628541933, 62.892977062944546]
        },
        "properties": {
          "name": "P-Torikulma Kuopio",
          "parking_time": "15",
          "address": "Tulliportinkatu 44, 70110 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.698375826693326, 62.88544921589371]
        },
        "properties": {
          "name": "P-Väinölänniemenranta",
          "parking_time": "",
          "address": "Väinölänniemi 26, 70100 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.680487097858293, 62.89218442038815]
        },
        "properties": {
          "name": "P-Vihtori",
          "parking_time": "60",
          "address": "Kauppakatu 41, 70100 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.67951166902313, 62.89669181663421]
        },
        "properties": {
          "name": "VR Rautatieasema Kuopio",
          "parking_time": "",
          "address": "Asemakatu 1, 70100 Kuopio"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [27.71424944883765,
            62.90195537653105]
        },
        "properties": {
          "name": "Männistö special by Paavo",
          "parking_time": "",
          "address": "Sampsankatu, 70500 Kuopio"
        }
      },
    ]
  };


  return (
    <>
      <SidePanel
        filterTime={filterTime}
        setFilterTime={setFilterTime}
        geoData={geojsonData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Map
        filterTime={filterTime}
        geoData={geojsonData}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
}

export default App;