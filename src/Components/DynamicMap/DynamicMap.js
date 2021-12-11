import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import RouteCard from '../RouteCard/RouteCard';
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
                {/* <Marker position={[32.886520, -117.2263]}>
                    <Popup>
                        Sea World
                    </Popup>
                </Marker>
                <Marker position={[32.7641, -117.152680]}>
                    <Popup>
                        San Diego Medical Waste
                    </Popup>
                </Marker> */}
                <RoutingMachine locations={locations}/>
            </MapContainer>
        </div>
    )
}

export default DynamicMap


