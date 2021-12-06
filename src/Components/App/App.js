import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import DriverDashboard from '../DriverDashboard/DriverDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';
import LandingPage from '../LandingPage/LandingPage';

const App = () => {

  return (
    <main >
      <Header />
      <div className="content-container">
        <Route exact path = {['/home', '/']} render = {() => <LandingPage />} />
        <Route exact path = '/driver' render = {() => <DriverDashboard />} />
        <Route exact path = '/customer' render = {() => <CustomerDashboard />} />
      </div>
    </main>
  )
}

export default App;
