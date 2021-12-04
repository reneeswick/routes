import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DriverDashboard from '../DriverDashboard/DriverDashboard';

//comment

const App = () => {

  return (
    <main>
      <Header />
      <div className="content-container">
        <DriverDashboard />
      </div>
    </main>
  )
}

export default App;
