import React from 'react';
import './RouteCard.css';

const RouteCard = ({locations}) => {

  const cards = locations.map((location) => {
    return (
      <div className='route-card'>
        <div className='company-name'>{location.name}</div>
        <div className='container-cnt'>Disposal Time: {location.disposalTime} mins</div>
        <button className="service-completed-btn">Service Completed</button>
      </div>
    )
  })

  return (
    <p className='route-cards-container'>{cards}</p>
  )

}

export default RouteCard;
