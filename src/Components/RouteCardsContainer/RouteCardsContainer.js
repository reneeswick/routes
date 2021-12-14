import React from 'react';
import RouteCard from '../RouteCard/RouteCard';
import './RouteCardsContainer.css';

const RouteCardsContainer = ({ locations, markCompleted }) => {

  return (
    <div>
      <RouteCard markCompleted = {markCompleted} locations={locations}/>
      <button className="btn-stndrd">Route Completed</button>
    </div>
  )
}

export default RouteCardsContainer;
