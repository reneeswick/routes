import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import DynamicMap from "../DynamicMap/DynamicMap";
import Welcome from "../Welcome/Welcome";
import RouteCardsContainer from "../RouteCardsContainer/RouteCardsContainer";
import LoadingCover from "../LoadingCover/LoadingCover";
import Calendar from "../Calendar/Calendar";
import "./DriverDashboard.css";
import {getRoutingData, patchLocationComplete} from "./../../util/api"



const DriverDashboard = ({id}) => {
  if(id===null){id=17}

  const [selectedDay, setSelectedDay] = useState("Monday")
  const [routeLocations, setRouteLocations] = useState([])
  const [driverID, setDriverID] = useState(id)

  useEffect(() => {
    getRoutingData(driverID, selectedDay)
    .then(data => setRouteLocations(data.data.routeRequest))
  }, [selectedDay])


  const markCompleted = (location) => {
    setRouteLocations((prevState) => {
      return prevState.filter(locations => locations.locationId !== location.locationId);
    })
    patchLocationComplete(location.locationId)

  }

  const submitDate = (date) => {
    setRouteLocations([])
    let officialDate = new Date(date)
    let dayIndex = officialDate.getDay()

    if (dayIndex === 0) {
      setSelectedDay("Monday")
    } else if (dayIndex === 1) {
      setSelectedDay("Tuesday")
    } else if (dayIndex === 2) {
      setSelectedDay("Wednesday")
    } else if (dayIndex === 3) {
      setSelectedDay("Thursday")
    } else if (dayIndex === 4) {
      setSelectedDay("Friday")
    } else if (dayIndex === 5) {
      setSelectedDay("Saturday")
    } else {
      setSelectedDay("Sunday")
    }
  }


  return (
    <div className="driver-dashboard">
      {routeLocations.length<1 && <LoadingCover/>}
      <Welcome />
      <Link to={`/add-new-customer/${id}`}>
        <button className='btn-stndrd add-new-customer'>Add New Customer</button>
      </Link>
      <Calendar submitDate={submitDate}/>
      <div className="route-container">
        <DynamicMap key={Date.now()} locations={routeLocations}/>
        <RouteCardsContainer  key={routeLocations.length} markCompleted = {markCompleted} locations={routeLocations}/>
      </div>
    </div>
  )

}

export default DriverDashboard;


// get routingData - update state with data
//
