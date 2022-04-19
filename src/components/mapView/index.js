import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import locationIcon from 'assets/locationIcon.svg';

import './styles.scss';

const userLocationIcon = new Icon({
  iconUrl: locationIcon,
  iconRetinaUrl: locationIcon,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const MapView = ({ location }) => {
  const { lat, lon } = location?.coordinates;

  return (
    <>
      {location.loaded && !location.error && (
        <MapContainer
          className="map-container"
          center={[lat, lon]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lon]} icon={userLocationIcon}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default MapView;
