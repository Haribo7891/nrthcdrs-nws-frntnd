import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div className="no-match">
    <h3>We couldn't find what you are looking for...</h3>
    <img className="no-match-image" src="/img/grumpy_cat.jpeg" alt="grumpy cat"/>
    <br />
    <h3><Link to='/'>Go back to homepage</Link></h3>
  </div>
);

export default NoMatch;
