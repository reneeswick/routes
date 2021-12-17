import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome';
import DynamicTracking from '../DynamicTracking/DynamicTracking';
import {getRoutingDataCustomerId} from '../../util/api'
import './CustomerDashboard.css';

const CustomerDashboard = ({id}) => {
  const [locations, setLocations] = useState([])
  if(id===null){id=96}
  const [customerId, setCustomerId] = useState(id)
  const [day, setDay] = useState("Monday")
  const [pickupNum, setPickupNum] = useState([])
  const [emptyData, setEmptyData] = useState(true)
  const [refresh, setRefresh] = useState(1)

  console.log(customerId)
  useEffect(() => {
    getRoutingDataCustomerId(customerId, day)
    .then(data => {
      return data;
    })
    .then(data => {
      setLocations(data.data.routeRequest)
      cleanCusData(data.data.routeRequest)
    })
  }, [refresh])

  const updateCard = () => {
    setRefresh(refresh+1);
  }
  const cleanCusData = (data) => {
    if(!data.length>2){ setLocations([]); return}
    const dataWithoutStartAndEnd = data.filter(location => location.locationId!==null)
    const customerIndexes = []
    const customerLocations = dataWithoutStartAndEnd.filter((item, i) => {
      
      let check = item.customerId === customerId
      if(check){
        customerIndexes.push(i)
      }
      return check
    })
    setPickupNum(customerIndexes)
    setEmptyData(false)
  }

  const calculatePickupInformation = () => {
        
  }

  return (
    <div className='customer-dashboard'>
      <Welcome type="Customer"/>
      <DynamicTracking updateCard={updateCard} noPickups={emptyData} key={(pickupNum.length+refresh)} pickupNum={pickupNum} />
      <Link to= '/update-customer-account'>
        <button className='btn-stndrd'>Update Customer Account</button>
      </Link>
    </div>
  )
}

export default CustomerDashboard;
