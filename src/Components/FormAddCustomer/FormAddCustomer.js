import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormAddCustomer.css';
import {createCustomer, editCustomerData } from './../../util/api'
import {renderPopup} from './../../util/dom-helper'

const FormAddCustomer = ({id}) => {
  const [customerName, setCustomerName] = useState('');
  const [street, setStreet] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('')
  const [pickupDay, setPickupDay] = useState('');
  const [bins, setBins] = useState('')
  const [error, setError] = useState(null)
  const [cusId, setCusId] = useState(null)

  /*DriverID is defaulted to 17 */
  if(!id){id = 17}

  const submitNewCustomer = async () => {
    let customerIDResponse = await createCustomer(id, customerName);

    if(customerIDResponse.error){
      setError(customerIDResponse.error)
      renderPopup(`${error}`, 3500, "red", `none`)
    }
    let data =  customerIDResponse.data.createCustomer
    setCusId(data.id)
    editCustomerData(data.id, street, street2, city, state, pickupDay, bins)//number of bins is last arg
  }


  return (
    <div className='add-new-customer-form'>
      <form>
        <h1 className='subheader'>Add a New Customer</h1>
        <Link to='/driver'>
          <button className='secondary-btn return-to-dash'>Return to Driver Dashboard</button>
        </Link>
        <input
          type='text'
          name='customerName'
          placeholder='Customer Name (First, Last)'
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type='text'
          name='street'
          placeholder='Address 1'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type='text'
          name='street2'
          placeholder='Address 2'
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
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
        <select name='bins' onChange={(e)=> setBins(e.target.value)}>
          <option value='0' selected disabled hidden>Select Container Amt.</option>
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
      <button className='btn-stndrd' onClick={()=>{submitNewCustomer(); renderPopup(`${customerName} CUS-ID#${cusId} has been added to the database`, 3500, "blue", "driver")}}>Create New Customer</button>
    </div>
  )
}

export default FormAddCustomer;
