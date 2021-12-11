import React from 'react';
import './RouteCard.css';

const RouteCard = ({locations}) => {

  const cards = locations.map((location) => {
    return (
      <div className='route-card'>
        <div className='company-name'>{location.name}</div>
        <div className='disp-label'>Estimated Disposal Time: </div>
        <div className='disp-time'>{location.disposalTime} mins</div>
        <button className='secondary-btn'>Service Completed</button>
      </div>
    )
  })

  return (
    <p className='route-cards-container'>{cards}</p>
  )

}

export default RouteCard;
