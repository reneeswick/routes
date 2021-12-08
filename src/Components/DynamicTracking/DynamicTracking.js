import React from 'react';
import './DynamicTracking.css';

const DynamicTracking = () => {
  /*
  Interpolate number of stops away with the amount of customers serviced === true
  */

  return (
    <div className='tracking-msg'>
      <p>Your driver is 5 stops away!</p>
      <p>They will arrive in approximately 45 minutes</p>
    </div>
  )
}

export default DynamicTracking;
