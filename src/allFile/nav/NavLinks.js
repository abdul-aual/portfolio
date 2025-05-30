import React from 'react';
import { Link } from 'react-router-dom';
import './navlink.css';

const NavLinks = () => {
  return (
    <div className="navDiv">
      <nav>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/academic">Academic Records</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
