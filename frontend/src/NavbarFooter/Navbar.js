import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import Image from '../Profile/Image.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="profile-image">
        <NavLink to="/profile" activeClassName="active">
          <img src={Image} alt="HR Profile" />
        </NavLink>
      </div>
      <ul>
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/employees" activeClassName="active">Employees</NavLink></li>
        <li><NavLink to="/attendance" activeClassName="active">Attendance</NavLink></li>
        <li><NavLink to="/payroll" activeClassName="active">Payroll</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;