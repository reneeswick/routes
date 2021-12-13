import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateCustomerAccount } from './../../util/api';
import './FormUpdateCustomerAccount.css';

const FormUpdateCustomerAccount = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pickupDay, setPickupDay] = useState('');
  const [bins, setBins] = useState(0);

  /*customerID is defaulted to 1 -- needs to be dynamically passed as a prop*/
  const customerId = 7
  let locationID = 14

  const submitCustomerUpdates = () => {
    updateCustomerAccount(locationID, pickupDay, bins)
  }

  return (
    <div>
      <h1 className='subheader'>Update Customer Account</h1>
      <Link to='/customer'>
        <button className='secondary-btn return-to-dash'>Return to Customer Dashboard</button>
      </Link>
      <form className='update-customer-info-form'>
        <label>Select a New Pickup Day</label>
        <select name='day' onChange={(e) => setPickupDay(e.target.value)}>
          <option value='none' selected disabled hidden>Day</option>
          <option value='Sunday'>Sunday</option>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thursday'>Thursday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
        </select>
        <label>Select New Amount of Bins</label>
        <select name='bins' onChange={(e)=> setBins(e.target.value)}>
          <option value='0' selected disabled hidden>Number</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
      </form>
      <button className='btn-stndrd' onClick={() => submitCustomerUpdates()}>Submit Updates</button>
    </div>
  )
}

export default FormUpdateCustomerAccount;
