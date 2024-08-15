
"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const locationIcon = new L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',  
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const initialMarkers = [
  { label: "New Delhi", position: [28.6139, 77.209] },
  { label: "Mumbai", position: [19.076, 72.8777] },
  { label: "Chennai", position: [13.0827, 80.2707] },
  { label: "Kolkata", position: [22.5726, 88.3639] },
  { label: "Bengaluru", position: [12.9716, 77.5946] },
];

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

export default function Map() {
  const [center, setCenter] = useState([28.6139, 77.209]);

  const handleMarkerClick = (position) => {
    setCenter(position);
  };

  return (
    <MapContainer center={center} zoom={4.4} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {initialMarkers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={locationIcon}
          eventHandlers={{
            click: () => handleMarkerClick(marker.position),
          }}
        >
          <Popup>{marker.label}</Popup>
        </Marker>

      ))}
      <ChangeView center={center} />
    </MapContainer>
  );
}
