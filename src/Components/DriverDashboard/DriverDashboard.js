import React, {useState} from 'react';
import DynamicMap from '../DynamicMap/DynamicMap';
import Welcome from '../Welcome/Welcome';
import RouteCardsContainer from '../RouteCardsContainer/RouteCardsContainer';
import Calendar from '../Calendar/Calendar';

const DriverDashboard = () => {
  /////////Test Data///////////
  const trialLocations = [
      {position: 0, companyName:"Company Name", containerAmt: 2, lat:32.7641, lng:-117.152680},
      {position: 1, companyName:"Company Name2", containerAmt: 1, lat:32.886520, lng:-117.2263},
      {position: 2, companyName:"Company Name3", containerAmt: 3, lat:38.6570351, lng:-104.0962085},
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
    <div className="dashboard">
      <Welcome />
      <Calendar submitDate={submitDate}/>
      <DynamicMap />
      <RouteCardsContainer locations={trialLocations}/>
    </div>
  )

}

export default DriverDashboard;
