import React from 'react';
import { NavLink } from 'react-router-dom';

import { Topics } from '../containers';

const Navbar = () => (
  <nav className="container card" style={{ backgroundColor: 'rgba(236, 255, 154, 0.774)' }}>
    <div>
      <div className="homepage-title">
        <h1><NavLink to={ '/' }>NorthCoders News</NavLink></h1>
      </div>
      <Topics />
    </div>
  </nav>
);
  
export default Navbar;
