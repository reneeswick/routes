import React from 'react';
import './RouteCard.css';

const RouteCard = ({locations}) => {

  const cards = locations.map((location) => {
    return (
      <div className='route-card'>
        <div>{location.companyName}</div>
        <div>Amount of containers: {location.containerAmt}</div>
        <button>Service Completed</button>
      </div>
    )
  })

  return (
    <p>{cards}</p>
  )

}

export default RouteCard;
