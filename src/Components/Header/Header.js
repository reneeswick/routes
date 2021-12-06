import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from './logoroutes.png'

const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <input type="checkbox" id="nav-check"></input>
                    <div className="nav-header">
                        <img className="nav-logo" src={logo} alt='logo'></img>
                    </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/driver">Driver</NavLink>
                    <NavLink to="/customer">Customer</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
