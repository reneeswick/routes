import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <h1>Routes</h1>
          <nav>
            <NavLink to= '/'> Home </NavLink>
            <NavLink to = '/driver' > Driver </NavLink>
            <NavLink to = '/customer'> Customer </NavLink>
          </nav>
        </div>
    )
}

export default Header
