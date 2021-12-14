import React from 'react';
import './Welcome.css';

const Welcome = ({type = "Driver"}) => {

  return (
    <h1 className="subheader">Welcome {type}</h1>
  )
}

export default Welcome;
