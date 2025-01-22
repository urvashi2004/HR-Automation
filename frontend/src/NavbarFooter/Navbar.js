import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="dropdown">
          <NavLink exact to="/master-data" activeClassName="active" className="dropbtn" onClick={toggleDropdown}>
            Master Data <span className="arrow">&#9660;</span>
          </NavLink>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <NavLink to="/client-data" activeClassName="active" className="dropdown-text">Client Data</NavLink>
            <NavLink to="/enquiry-data" activeClassName="active" className="dropdown-text">Enquiry Data</NavLink>
            <NavLink to="/account-data" activeClassName="active" className="dropdown-text">Account Data</NavLink>
            <NavLink to="/payroll-data" activeClassName="active" className="dropdown-text">Payroll Data</NavLink>
            <NavLink to="/legal-data" activeClassName="active" className="dropdown-text">Legal Data</NavLink>
          </div>
        </li>
        <li><NavLink to="/employees" activeClassName="active">Reports</NavLink></li>
        <li><NavLink to="/attendance" activeClassName="active">MIS Reports</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;