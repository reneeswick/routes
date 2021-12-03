import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import DriverMap from '../DriverMap/DriverMap';
import Welcome from '../Welcome/Welcome';

const App = () => {

  return (
    <main>
      <h1>Routes</h1>
      <div className="content-container">
        <Welcome />
        <MapContainer className="map" center={[32.886520, -117.152680]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[32.886520, -117.152680]}>
            <Popup>
              San Diego Medical Waste
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  )
}

export default App;
