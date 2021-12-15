import React from 'react';
import RouteCard from '../RouteCard/RouteCard';
import './RouteCardsContainer.css';

const RouteCardsContainer = ({ locations, markCompleted }) => {
  
  return (
    <div>
      <RouteCard markCompleted = {markCompleted} locations={locations}/>
    </div>
  )

}

export default RouteCardsContainer;
