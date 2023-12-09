import React from 'react';
import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap'

function Navbar() {
  return (
    <div>

      <ul className="nav justify-content-end navbar bg-body-tertiary">
        <li className="nav-item">
          <Link className="nav-link" to="/Home" style={{color:"black",fontWeight:"bold"}}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" style={{color:"black",fontWeight:"bold"}}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Skills" style={{color:"black",fontWeight:"bold"}}>
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Projects" style={{color:"black",fontWeight:"bold"}}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contacts" style={{color:"black",fontWeight:"bold"}}>
            Contacts
          </Link>
        </li>
      </ul>
    
    </div>
  );
}

export default Navbar;
