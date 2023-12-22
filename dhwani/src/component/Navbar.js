import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/dhwani.jpg'; 
import './Navbar.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className='mainnav'>
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => setShowLinks(!showLinks)} />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet" activeClassName="active">
            Planet
          </NavLink>
        </li>
        <li>
          <NavLink to="/species" activeClassName="active">
            Species
          </NavLink>
        </li>
        <li>
          <NavLink to="/radiation" activeClassName="active">
            Radiation
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
