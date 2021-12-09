import React from 'react';
import Welcome from '../Welcome/Welcome';
import DynamicTracking from '../DynamicTracking/DynamicTracking';
import './CustomerDashboard.css';

const CustomerDashboard = () => {

  return (
    <div className='customer-dashboard'>
      <Welcome />
      <DynamicTracking />
    </div>
  )
}

export default CustomerDashboard;
