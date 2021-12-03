import L from 'leaflet';
import {createControlComponent} from "@react-leaflet/core";
import 'leaflet-routing-machine'

const createRoutingMachineLayer = ({locations}) => {
    const leafletLocations = locations.map(location => {return L.latLng(location.lat, location.lng);});
    const instance = L.Routing.control({
      waypoints: leafletLocations,
      lineOptions: {
        styles: [{ color: "#C44961", weight: 4 }]
      },
      show: true,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false
    });
  
    return instance;
  };
  
  const RoutingMachine = createControlComponent(createRoutingMachineLayer);
  
  export default RoutingMachine;




//   L.latLng(32.7641, -117.152680),
//   L.latLng(32.886520, -117.2263),        L.latLng(33.886520, -118.2263),
