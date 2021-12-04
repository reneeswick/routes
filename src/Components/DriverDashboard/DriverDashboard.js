import React from 'react';
import DynamicMap from '../DynamicMap/DynamicMap';
import Welcome from '../Welcome/Welcome';

const DriverDashboard = () => {
  const trialLocations = [
      {position: 0, companyName:"Company Name", containerAmt: 2, lat:32.7641, lng:-117.152680},
      {position: 1, companyName:"Company Name2", containerAmt: 1, lat:32.886520, lng:-117.2263},
      {position: 2, companyName:"Company Name3", containerAmt: 3, lat:38.6570351, lng:-104.0962085},
  ]

  return (
    <div>
      <Welcome />
      <DynamicMap />
    </div>
  )

}

export default DriverDashboard;
