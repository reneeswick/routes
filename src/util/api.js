// const axios = require('axios');


// export const getRoutingData = (driverID, day) => { // const graphqlQuery = {
//     //     "operationName": "routeRequest",
//     //     "query": `query routeRequest(driver: 1, pickupDay: "Monday") { name  }`,
//     //     "variables": {}
//     // };

//     const headers = {
//         "content-type": "application/json",
//         "Access-Control-Allow-Headers": "Accept",
//     };
//     const query = `{
//         routeRequest (driver: ${driverID}, pickupDay: "Monday")
//             {
//                 name
//                 streetAddress
//                 city
//                 state
//                 latitude
//                 longitude
//                 disposalTime
//             }

//         }`

//     return axios({
//         method: "POST",
//         url: "https://peaceful-wildwood-61032.herokuapp.com/graphql",
//         headers: headers,
//         data: JSON.stringify({
//             query: (
//                 `${query}`
//             )
//         })
//     })
// }

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

        console.log(query)
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

        console.log(query)
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
export const getRoutingDataCustomerId = (cusId, day) => {
    const query = `{
        routeRequest(customer: ${cusId},
            pickupDay: "${day}"){
              name
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
