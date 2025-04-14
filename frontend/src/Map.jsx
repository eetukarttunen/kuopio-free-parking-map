import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import './Map.css';
import Navigation from './Navigation.jsx';

const parkingTimeColorMap = {
  "15": "red",
  "60": "yellow",
  "120": "orange",
  "no_time": "green",
};

const getColorByParkingTime = (parkingTime) => {
  return parkingTimeColorMap[parkingTime] || "grey";
};

const createCustomIcon = (color) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const Map = ({ filterTime, geoData, setIsOpen, isOpen }) => {
  const latitude = 62.8939;
  const longitude = 27.6763;

  const mapOptions = {
    center: [latitude, longitude],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  const filteredGeoJson = useMemo(() => {
    const filteredFeatures = geoData.features.filter((feature) => {
      const time = feature.properties.parking_time;
      if (!filterTime) return true;
      if (filterTime === "no_time") return time === "";
      return time === filterTime;
    });

    return {
      ...geoData,
      features: filteredFeatures,
    };
  }, [filterTime, geoData]);

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.geometry) {
      const { name, parking_time, address } = feature.properties;
      const [lng, lat] = feature.geometry.coordinates;
      const timeText = parking_time ? `${parking_time} min` : "Ei aikarajoitusta";
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

      const popupContent = `
        <div>
          <strong>${name}</strong><br />
          ${timeText}<br />
          ${address}<br />
          <a href="${googleMapsUrl}" target="_blank">Aja minut tänne</a>
        </div>
      `;

      layer.bindPopup(popupContent);
    }
  };

  const pointToLayer = (feature, latlng) => {
    const parkingTime = feature.properties.parking_time || "no_time";
    const color = getColorByParkingTime(parkingTime);
    const customIcon = createCustomIcon(color);
    return L.marker(latlng, { icon: customIcon });
  };

  useEffect(() => {
    const map = document.querySelector('.leaflet-container');
    if (map) {
      const handleClick = () => {
        setIsOpen(false);
      };
      map.addEventListener('click', handleClick);
      return () => {
        map.removeEventListener('click', handleClick);
      };
    }
  }, [setIsOpen]);

  return (
    <>
      <Navigation />
      <MapContainer {...mapOptions} className="map">
      <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
/>

        <GeoJSON
          key={filterTime}
          data={filteredGeoJson}
          onEachFeature={onEachFeature}
          pointToLayer={pointToLayer}
        />
        
        <div className='map-info' style={{ display: isOpen ? 'none' : 'block' }}>
          <ul>
            <li>15min</li>
            <li>60min</li>
            <li>120min</li>
            <li>Ei aikarajoitusta</li>
          </ul>
        </div>
        
      </MapContainer>
    </>
  );
};

export default Map;
