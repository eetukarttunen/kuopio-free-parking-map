import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './Map.css';
import Navigation from './Navigation.jsx';

const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({ filterTime, geoData, setIsOpen }) => {
  const latitude = 62.8939;
  const longitude = 27.6763;

  const mapOptions = {
    center: [latitude, longitude],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  const filteredFeatures = geoData.features.filter((feature) => {
    const time = feature.properties.parking_time;
    if (!filterTime) return true;
    if (filterTime === "no_time") return time === "";
    return time === filterTime;
  });

  const filteredGeoJson = {
    ...geoData,
    features: filteredFeatures,
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const { name, parking_time, address } = feature.properties;
      const timeText = parking_time ? `${parking_time} min` : "Ei aikarajoitusta";

      layer.bindPopup(
        `<div><strong>${name}</strong><br />${timeText}<br />${address}</div>`
      );
    }
  };

  const pointToLayer = (feature, latlng) => {
    return L.marker(latlng, { icon: defaultIcon });
  };

  // Logic to close the side-panel based on user map movements.
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
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          key={filterTime}
          data={filteredGeoJson}
          onEachFeature={onEachFeature}
          pointToLayer={pointToLayer}
        />
      </MapContainer>
    </>
  );
};

export default Map;
