import React, {useState} from 'react';

const Calendar = ({ submitDate }) => {
  const [day, setDay] = useState('');

  return (
    <div>
      <h2>Select a date of service</h2>
      <input
        type = 'date'
        name = 'date'
        value = {day}
        onChange = {event => {setDay(event.target.value)}}
      />
      <button onClick={()=>submitDate(day)}>Generate my route</button>
    </div>
  )
}

export default Calendar;
