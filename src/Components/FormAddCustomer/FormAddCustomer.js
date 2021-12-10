import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormAddCustomer.css';

const FormAddCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('')
  const [pickupDay, setPickupDay] = useState('');

  /*DriverID is defaulted to 1 -- needs to be dynamically passed as a prop*/
  let driverID = 1

  const createNewCustomer = (driverID) => {
    let newCustomer = {
      name: customerName,
      driver_id: driverID
    }
  }

  const createNewLocation = (customerID) => {
    let newLocation = {
      customer_id: customerID,
      streetAdress: street,
      city: city,
      state: state,
      pickupDay: pickupDay
    }
  }

  const submitNewCustomer = () => {
    createNewCustomer(driverID)
    //let customerID = fetch customerID //
    createNewLocation(/*customerID*/)
  }


  return (
    <div>
      <form className='add-new-customer-form'>
        <input
          type='text'
          name='customerName'
          placeholder='Customer name here'
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type='text'
          name='street'
          placeholder='Street Address'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <select name='city' onChange={(e) => setCity(e.target.value)}>
          <option value='none' selected disabled hidden>Select a City</option>
          <option value='San Diego'>San Diego</option>
        </select>
        <select name='state' onChange={(e) => setState(e.target.value)}>
          <option value='none' selected disabled hidden>Select a State</option>
          <option value='CA'>CA</option>
        </select>
        <select name='day' onChange={(e) => setPickupDay(e.target.value)}>
          <option value='none' selected disabled hidden>Select a Pick-Up Day</option>
          <option value='Sunday'>Sunday</option>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thursday'>Thursday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
        </select>
      </form>
      <button className='btn-stndrd' onClick={()=>{submitNewCustomer()}}>Create New Customer</button>
      <Link to='/driver'>
        <button className='secondary-btn'>Return to Driver Dashboard</button>
      </Link>
    </div>
  )
}

export default FormAddCustomer;
