import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DriverDashboard from '../DriverDashboard/DriverDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';

const App = () => {

  return (
    <main>
      <Header />
      <div className="content-container">
        <DriverDashboard />
        <CustomerDashboard />
      </div>
    </main>
  )
}

export default App;
