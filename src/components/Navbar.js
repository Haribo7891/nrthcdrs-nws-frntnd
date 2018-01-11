import React from 'react';
import { NavLink } from 'react-router-dom';

import { Topics } from '../containers';

const Navbar = () => (
  <nav className="container card navbar-card sticky-top" style={{ backgroundColor: 'hotpink' }}>
    <div className="homepage-title">
      <NavLink className="display-4" to={ '/' }>NorthCoders News</NavLink>
      <p className="lead">Filter and read the articles, then vote and comment on your favourite!</p>
      <Topics />
    </div>
  </nav>
);
  
export default Navbar;
