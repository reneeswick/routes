import React from 'react';
import RouteCard from '../RouteCard/RouteCard';
import './RouteCardsContainer.css';

const RouteCardsContainer = ({ locations }) => {
  /*
  Route Completed button will reset all customer.isServiced to false and reset the driver's route
  */

  return (
    <div>
      <RouteCard locations={locations}/>
      <button className="btn-stndrd">Route Completed</button>
    </div>
  )

}

export default RouteCardsContainer;
