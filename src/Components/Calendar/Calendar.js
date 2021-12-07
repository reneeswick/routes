import React, {useState} from 'react';
import './Calendar.css';

const Calendar = ({ submitDate }) => {
  const [day, setDay] = useState('');

  return (
    <div className="calendar-container">
      <h2>Select a date of service</h2>
      <input className="calendar"
        type = 'date'
        name = 'date'
        value = {day}
        onChange = {event => {setDay(event.target.value)}}
      />
      <button className= "btn-stndrd" onClick={()=>submitDate(day)}>Generate My Route
      </button>
    </div>
  )
}

export default Calendar;
