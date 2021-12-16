import React from 'react'
import Fade from 'react-reveal/Fade';
import landingmain from '../../assets/landingmain.jpg'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landing-main">
            <div className="background">
                <img src={landingmain} alt="landing backdrop truck"></img>
            </div>
            <Fade big left>
                <div className="landing-main-info-container">
                    <h2>Landing Page</h2>
                    <p>
                    Routes is a responsive and interactive application designed for San Diego Medical Waste. Two users have access to the features of this application.
                    </p>
                    <p>
                    Drivers can view their driving route for the day optimized by our back-end team. Additionally, they can "mark-off" when a location's service is complete. Drivers also have administrative acess to add customer info to a certain day's route.
                    </p>
                    <p>
                    Customers can login and track their driver as well as update their service agreement.
                    </p>
                    <div className ="landing-buttons">
                        <Fade left delay={1000}>
                            <button className="button">Driver</button>
                        </Fade>
                        <Fade right delay={1000}>
                            <button className="button">Customer</button>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default LandingPage
