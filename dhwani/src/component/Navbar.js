import React, { useState } from 'react';
import logo from '../assets/dhwani.jpg'; 
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className='mainnav'>
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => setShowLinks(!showLinks)} />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="#planet" activeClassName="active" smooth>
            Planet
          </Link>
        </li>
        <li>
          <Link to="#species" activeClassName="active" smooth>
            Species
          </Link>
        </li>
        <li>
          <Link to="#radiation" activeClassName="active" smooth>
            Radiation
          </Link>
        </li>
        <li>
          <Link to="#contact" activeClassName="active" smooth>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
