import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import DriverDashboard from '../DriverDashboard/DriverDashboard';
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';
import LandingPage from '../LandingPage/LandingPage';
import FormAddCustomer from '../FormAddCustomer/FormAddCustomer';
import FormUpdateCustomerAccount from '../FormUpdateCustomerAccount/FormUpdateCustomerAccount';

const App = () => {


  return (
    <main >
      <Header />
      <div className="content-container">
        <Route exact path = {['/home', '/']} render = {() => <LandingPage />} />
        <Route exact path = '/driver' render = {() => <DriverDashboard id={null}/>} />
        <Route exact path = '/customer' render = {() => <CustomerDashboard id={null}/>} />
        <Route
          exact path="/customer/:id"
          render={({match}) => {
            return <CustomerDashboard id={parseInt(match.params.id)} />
          }}
        />
        <Route
          exact path="/driver/:id"
          render={({match}) => {
            return <DriverDashboard id={parseInt(match.params.id)} />
          }}
        />
        <Route exact path = '/add-new-customer' render = {() => <FormAddCustomer />} />
        <Route exact path = '/update-customer-account' render = {() => <FormUpdateCustomerAccount />} />
      </div>
      <div className="popup-container hidden">
      </div>
    </main>
  )
}

export default App;
