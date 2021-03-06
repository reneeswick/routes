import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import './DynamicMap.css'


const DynamicMap = ({ locations }) => {
    if(!locations){
        locations=[]
    }

    return (
        <div className="map-container">
            <MapContainer className="map" center={[32.886520, -117.152680]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingMachine locations={locations}/>
            </MapContainer>
        </div>
    )
}

export default DynamicMap
