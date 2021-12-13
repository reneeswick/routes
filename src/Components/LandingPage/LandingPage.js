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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo sapien, rutrum in ipsum in, tincidunt venenatis libero. Praesent consequat in risus a maximus. Nam elementum felis rutrum erat volutpat, ut egestas lectus tempor. Donec ut ante tincidunt, sollicitudin velit nec, aliquet velit. Donec eu purus pretium, fermentum risus eget, gravida augue. Nullam ac nisi vehicula, posuere lorem sit amet, ullamcorper risus. In nec pharetra ligula. Curabitur tincidunt nisi enim, commodo.
                    </p>
                    <Fade left delay={1000}>
                        <button className="button">Driver</button>
                    </Fade>
                    <Fade right delay={1000}>
                        <button className="button">Customer</button>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}

export default LandingPage
