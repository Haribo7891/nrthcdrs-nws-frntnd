import React from 'react';
import { NavLink } from 'react-router-dom';

import { Topics } from '../containers';

const Navbar = () => (
  <nav className="navbar navbar-color">
    <div className="container">
      <div className="homepage-title">
        <NavLink className="display-4" to={ '/' }>NorthCoders News</NavLink>
      </div>
      <Topics />
    </div>
  </nav>
);
  
export default Navbar;
