import React from 'react';
import { Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import DynamicTracking from '../DynamicTracking/DynamicTracking';
import './CustomerDashboard.css';

const CustomerDashboard = () => {

  return (
    <div className='customer-dashboard'>
      <Welcome />
      <DynamicTracking />
      <Link to= '/update-customer-account'>
        <button className='btn-stndrd'>Update Customer Account</button>
      </Link>
    </div>
  )
}

export default CustomerDashboard;
