import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { useHistory } from 'react-router';
import 'leaflet/dist/leaflet.css';

import useGeoLocation from 'hooks/useGeolocation';
import routesPaths from 'routes/routesPaths';
import useTargets from 'hooks/useTargets';
import { ICONS_MAP, userLocationIcon, emptyOvalIcon } from 'utils/topics';

import './styles.scss';

const center = [-38.0174106, -57.6705735];

const MapView = () => {
  const history = useHistory();
  const mapRef = useRef();
  const location = useGeoLocation();
  const { lat, lon } = location?.coordinates;
  const { targets } = useTargets();

  const getTopicIcon = topicId => {
    return ICONS_MAP.get(topicId) || emptyOvalIcon;
  };

  const NewTargetClick = () => {
    const map = useMapEvents({
      click: e => {
        const { lat, lng } = e.latlng;
        history.push({
          pathname: routesPaths.newtarget,
          search: `?lat=${lat}&lng=${lng}`,
        });
      },
    });
    return null;
  };

  useEffect(() => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo([lat, lon], 16);
    }
  }, [location, lat, lon]);

  return (
    <>
      <MapContainer
        className="map-container"
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.loaded && !location.error && (
          <Marker position={[lat, lon]} icon={userLocationIcon}></Marker>
        )}

        {targets.length &&
          targets.map(({ lat, lng, radius, title, topic_id }, index) => (
            <Marker key={index} position={[lat, lng]} icon={getTopicIcon(topic_id)}></Marker>
          ))}

        <NewTargetClick />
      </MapContainer>
    </>
  );
};

export default MapView;
