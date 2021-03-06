import React from 'react';
import './RouteCard.css';

const RouteCard = ({locations, markCompleted}) => {
  const filteredLocations = locations.filter((location) => {
    return location.locationId !== null
  })

  const cards = filteredLocations.map((location, i) => {
    console.log(location.name, location.customerId)
    return (
      <div key={`${i}${Date.now()}`} className='route-card' id={i}>
        <div className='company-name'>{location.name}</div>
        <div className='disp-label'>Estimated Disposal Time: </div>
        <div className='disp-time'>{location.disposalTime} mins</div>
        <button onClick = {()=> markCompleted(location)} className='secondary-btn' id={i}>Service Completed</button>
      </div>
    )
  })

  return (
    <section  className='route-cards-container'>{cards}</section>
  )

}

export default RouteCard;
