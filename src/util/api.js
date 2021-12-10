const axios = require('axios');

export const getRoutingData = (driverID, day) => {

    // const graphqlQuery = {
    //     "operationName": "routeRequest",
    //     "query": `query routeRequest(driver: 1, pickupDay: "Monday") { name  }`,
    //     "variables": {}
    // };

    const headers = {
        "content-type": "application/json",
        "Access-Control-Allow-Headers": "Accept",
    };


    return axios({
        method: "POST",
        url: "https://peaceful-wildwood-61032.herokuapp.com/graphql",
        headers: headers,
        data: 
        JSON.stringify({
            query: (
                `{
                routeRequest (driver: 1, pickupDay: "Monday")
                    {
                        name
                        streetAddress
                        city
                        state
                        latitude
                        longitude
                        disposalTime
                    }
                
                }`
            )
        })
    })
}

