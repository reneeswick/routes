export const createCustomer = (driverId, name) => {

    const query = `mutation {
        createCustomer(
            name: "${name}",
            driverId: ${driverId}
            ) {
                id
                name
                driverId
            }}`

    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
                }),
    })
    .then((res) => (res.json()))
    .then((data)=> {console.log(data); return data})
}

export const editCustomerData = (customerId, streetAddress, streetAddress2, city, state, pickupDay, numberOfBins=3) => {


    //VV NOT SURE BUILDING IS THE RIGHT QUERY VALUE
    const query = `
        mutation { createLocation (
            streetAddress: "${streetAddress}",
            buildingNumber: "${streetAddress2}",
            city: "${city}",
            state: "${state}",
            pickupDay: "${pickupDay}",
            numberOfBins: ${numberOfBins},
            pickedUp: false,
            customerId: ${customerId}
        ) {
            id
            streetAddress
            buildingNumber
            city
            state
            pickupDay
            numberOfBins
            pickedUp
        }}
    `
    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    })
    .then((res) => (res.json()))
    .then((data)=> {console.log(data); return data})
}

export const getRoutingData = (driverID, pickupDay) => {
    const query = `{
        routeRequest(driver: ${driverID},
            pickupDay: "${pickupDay}"){
              name
              streetAddress
              city
              state
              latitude
              longitude
              disposalTime
              locationId
              customerId
            }
    }`
    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    })
    .then((res) => (res.json()))
    .then((data)=> {console.log(data); return data})
}

export const patchLocationComplete = (locationID, boolean = true) => {

    const query = `
        mutation { updateLocation(
            id: ${locationID},
            pickedUp: ${boolean}
        ) {
            id
            pickedUp
        }}`

    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    })
    .then((res) => (res.json()))
    .then((data)=> {console.log(data); return data})
}

export const updateCustomerAccount = (locationID, day, bins) => {

    const query = `
        mutation { updateLocation(
            id: ${locationID},
            pickupDay: "${day}",
            numberOfBins: ${bins}
        ) {
            id
            pickupDay
            numberOfBins
        }}`

    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    })
    .then((res) => (res.json()))
    .then((data)=> {console.log(data); return data})
}
