import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DynamicMap from '../DynamicMap/DynamicMap';
import Welcome from '../Welcome/Welcome';
import RouteCardsContainer from '../RouteCardsContainer/RouteCardsContainer';
import Calendar from '../Calendar/Calendar';
import './DriverDashboard.css';

const DriverDashboard = () => {
  /////////Test Data///////////
  const trialLocations = [
      {name:"Company Name1", disposalTime: 10, latitude:32.7641, longitude:-117.152680, city: 'San Diego', state: 'California', streetAddress: '123 America Way'},
      {name:"Company Name2", disposalTime: 15, latitude:32.886520, longitude:-117.2263, city: 'San Diego', state: 'California', streetAddress: '123 America Way'},
      {name:"Company Name3", disposalTime: 25, latitude:35.6570351, longitude:-105.0962085, city: 'San Diego', state: 'California', streetAddress: '123 America Way'},
      {name:"Company Name4", disposalTime: 10, latitude:36.6570351, longitude:-106.0962085, city: 'San Diego', state: 'California', streetAddress: '123 America Way'},
      {name:"Company Name5", disposalTime: 30, latitude:37.6570351, longitude:-107.0962085, city: 'San Diego', state: 'California', streetAddress: '123 America Way'},
  ]
////////////////////////////////
  const [selectedDay, setSelectedDay] = useState('')

  const submitDate = (date) => {
    let officialDate = new Date(date)
    let dayIndex = officialDate.getDay()

    if (dayIndex === 0) {
      setSelectedDay('Monday')
    } else if (dayIndex === 1) {
      setSelectedDay('Tuesday')
    } else if (dayIndex === 2) {
      setSelectedDay('Wednesday')
    } else if (dayIndex === 3) {
      setSelectedDay('Thursday')
    } else if (dayIndex === 4) {
      setSelectedDay('Friday')
    } else if (dayIndex === 5) {
      setSelectedDay('Saturday')
    } else {
      setSelectedDay('Sunday')
    }
  }

  return (
    <div className="driver-dashboard">
      <Welcome />
      <Calendar submitDate={submitDate}/>
      <div className="route-container">
        <DynamicMap locations={trialLocations} />
        <RouteCardsContainer locations={trialLocations}/>
      </div>
      <Link to='/add-new-customer'>
        <button className='btn-stndrd'>Add New Customer</button>
      </Link>
    </div>
  )

}

export default DriverDashboard;
