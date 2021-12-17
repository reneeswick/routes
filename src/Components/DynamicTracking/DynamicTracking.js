import React from 'react';
import './DynamicTracking.css';

const DynamicTracking = ({updateCard, pickupNum, noPickups}) => {
  /*
  Interpolate number of stops away with the amount of customers serviced === true
  */


  return (
    <>
    {!noPickups || !pickupNum.length===0 ?
      <div className='tracking-msg'>
        {pickupNum[0]===0 &&
          <p>You're the next pickup, please be ready!</p>
        }
        {pickupNum[0]>0 &&
          <p>Your driver is {pickupNum[0]+1} stops away!</p>
        }

        <p>They will arrive in approximately {(pickupNum[0]*15+15)} minutes</p>
        <button className='btn-stndrd'>Update Tracking</button>
      </div>
      :
      <div className='tracking-msg'>
        <p>We can't find any pickup locations scheduled for pickup today!</p>
        <p>Please try again another day, or click below to check again.</p>
        <button onClick={() => {updateCard()}} className='btn-stndrd'>Update Tracking</button>
      </div>
    }
    </>
  )
}

export default DynamicTracking;
