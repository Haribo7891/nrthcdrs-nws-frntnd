import React from 'react';
import { NavLink } from 'react-router-dom';

import { Topics } from '../containers';

const Navbar = () => (
  <nav className="navbar container navbar-color">
    <div className="homepage-title">
      <NavLink className="display-4" to={ '/' }>NorthCoders News</NavLink>
      <p className="lead">Filter and read the articles, then vote and comment on your favourite!</p>
      <Topics />
    </div>
  </nav>
);
  
export default Navbar;
