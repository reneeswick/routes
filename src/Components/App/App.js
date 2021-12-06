import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import DriverDashboard from '../DriverDashboard/DriverDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';

const App = () => {

  return (
    <main >
      <Header />
      <div className="content-container">
        <Route exact path = '/' render = {() => <LandingPage />} />
        <Route exact path = '/driver' render = {() => <DriverDashboard />} />
        <Route exact path = '/customer' render = {() => <CustomerDashboard />} />
      </div>
    </main>
  )
}

export default App;
