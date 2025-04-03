import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";

const Map = () => {
  const latitude = 62.8938994150319;
  const longitude = 27.676290599660508;

  // Currently using static data before the backend will be build to get this data from MongoDB.
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
          "parking_time": "Maksuton, 1 h",
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
          "parking_time": "Maksuton, 2h",
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
          "parking_time": "Maksuton, 2h",
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
          "parking_time": "Maksuton, 15min",
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
          "parking_time": "Maksuton, Ei aikarajaa",
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
          "parking_time": "Maksuton, 1h",
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
          "parking_time": "Maksuton",
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
          "parking_time": "Maksuton ilman aikarajaa",
          "address": "Sampsankatu, 70500 Kuopio"
        }
      },
    ]
  };

  const mapOptions = {
    center: [latitude, longitude],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };
  

    const onEachFeature = (feature, layer) => {
      if (feature.properties) {
        layer.bindPopup(
          `<div><strong>${feature.properties.name}</strong><br />
           ${feature.properties.parking_time} <br />
           ${feature.properties.address}</div>`
        );
      }
    };
  
    return (
      <MapContainer {...mapOptions} className="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
      </MapContainer>
    );
  };

export default Map;
