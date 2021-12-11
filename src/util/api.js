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

export const createCustomer = () => {

    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers": "Accept",
        },
        body: JSON.stringify({
            query: `mutation {
                createCustomer(
                    name: "Bob Johnson",
                    driverId: 1
                    ) {
                        id
                        name
                        driverId
                    }}`,
                }),
            })
    .then((res) => (res))
} 
export const getRoutingData = (driverID, pickupDay) => {

    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                routeRequest(driver: 4,
                    pickupDay: "Monday"){
                      name
                      streetAddress
                      city
                      state
                      latitude
                      longitude
                      disposalTime
                    }
                
            }`,
                }),
            })
    .then((res) => (res.json()))
} 

export const markLocationComplete = () => {

    return fetch('https://peaceful-wildwood-61032.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                routeRequest(driver: 4,
                    pickupDay: "Monday"){
                      name
                      streetAddress
                      city
                      state
                      latitude
                      longitude
                      disposalTime
                    }
                
            }`,
                }),
            })
    .then((res) => (console.log("fix the api, this isn't doing anything")))
} 