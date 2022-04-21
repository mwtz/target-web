import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useGeoLocation from 'hooks/useGeolocation';
import locationIcon from 'assets/locationIcon.svg';

import './styles.scss';

const userLocationIcon = new Icon({
  iconUrl: locationIcon,
  iconRetinaUrl: locationIcon,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const center = [-38.0174106, -57.6705735];

const MapView = () => {
  const location = useGeoLocation();
  const { lat, lon } = location?.coordinates;

  return (
    <>
      <MapContainer className="map-container" center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.loaded && !location.error && (
          <Marker position={[lat, lon]} icon={userLocationIcon}></Marker>
        )}
      </MapContainer>
    </>
  );
};

export default MapView;
