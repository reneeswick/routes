# Routes
Mod 4 + Capstone
<img width="1434" alt="Screen Shot 2021-12-15 at 9 56 38 AM" src="https://user-images.githubusercontent.com/83723401/146230400-da7573f2-a213-4256-917c-28f6eb851a69.png">

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Illustrations](#illustrations)
  - [Code Architecture](#code-architecture)
  - [Install + Setup](#setup)
  - [Contributors](#front-end-engineering-contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#improvements)
  - [Project Specs](#project-specs)

## Abstract
Routes is a responsive and interactive application designed for San Diego Medical Waste. Two users have access to the features of this application. 

<div style="display: flex">
  <img width="200" alt="Screen Shot 2021-12-15 at 10 00 21 AM" src="https://user-images.githubusercontent.com/83723401/146231094-8134b5c1-b16e-4b0e-b5fa-7646b7b91a56.png">
<img width="200" alt="Screen Shot 2021-12-15 at 10 00 38 AM" src="https://user-images.githubusercontent.com/83723401/146231111-f08c147b-d9df-4136-b2c2-1e92840fb7d8.png">
<img width="200" alt="Screen Shot 2021-12-15 at 10 00 49 AM" src="https://user-images.githubusercontent.com/83723401/146231123-c2faaaff-4e1f-46a7-a6ad-1026fa9dcf25.png">
</div>

``Drivers`` can view their driving route for the day optimized by our back-end team. Additionally, they can "mark-off" when a location's service is complete. Drivers also have administrative acess to add customer info to a certain day's route. 

``Customers`` can login and track their driver as well as update their service agreement.

## Technologies
  - React
  - React Router
  - Leaflet.js
  - Leaflet-Routing-Machine
  - React Reveal
  - Cypress
  - GraphQL API  

## Illustrations
![Application Walk-Through](https://user-images.githubusercontent.com/83723401/146247429-084ba154-e0a4-402a-a4fa-21b6a0708a09.gif)

## Code Architecture
This project was bootstrapped with [Create React App](https://create-react-app.dev/).

``./src/Components`` 
 - Parent Components include ``App`` which renders a ``DriverDashboard`` and a ``CustomerDashboard``

``./src/utlil``
  - This directory houses API calls 

``./cypress/integration``
  - Testing files
  - These can be run in the command line using ``npm run cypress``

## Setup
  - [View the deployed application here](https://main.d24jazywnsbqit.amplifyapp.com)

## Front-End Engineering Contributors
  - [Nate Sheridan](https://gist.github.com/natesheridan)
  - [Renee Swick-Ziller](https://github.com/reneeswick)
  - BE contributors can be found [here](https://github.com/ozzman84/routes-BE)

## Wins
  - ``Map Routing!``
    - This was our first time integrating a dynamic map into an application. Learning and implementing leaflet.js and leaflet-routing-machine was a central goal of this project, and we were happy to get it up and running in conjunction with the Back-End team's API that provides route optimization. 

  - ``Architecture!``
    - Creating an application with two different types of users posed an interesting problem for code architecture. The decision to create a parent component for the Driver and another for the Customer offers an opportunity to add more features for each user while maintaining their data in a thoughtful and logical manner.
  
## Improvements
- ``User Authentication``
    - Currently, the application is hard coded with a specific driver and a specific customer. In the future, the landing page would be a spot for any existing driver or customer could be authenticated and login.
    
- ``Web Sockets``
  - Future iterations would use a web socket for the customer to dynamically track their driver's approximated arrival.


## Project Specs
  - The project spec & rubric can be found [here](https://mod4.turing.edu/projects/capstone/)
