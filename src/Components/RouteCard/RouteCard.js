import React from 'react';

const RouteCard = ({locations}) => {

  const cards = locations.map((location) => {
    return (
      <div>
        <div>{location.companyName}</div>
        <div>{location.containerAmt}</div>
        <button>Service Completed</button>
      </div>
    )
  })

  return (
    <p>{cards}</p>
  )

}

export default RouteCard;
