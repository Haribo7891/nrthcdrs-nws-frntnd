import React from 'react';

const Footer = () => (
  <footer className="navbar footer-color app">
    <div className="container">
      <div className="footer-title">
        <h6>Made by Harry Crank as part of a project from <a href="https://northcoders.com/">Northcoders</a> Bootcamp</h6>
      </div>
      <div className="footer-links">
        <a className="list-inline-item badge badge-pill badge-dark" href="https://github.com/Haribo7891">
          <img src="/img/github-with-circle.svg" width="20px" alt="github" /> Github</a>
        <a className="list-inline-item badge badge-pill badge-dark" href="https://twitter.com/haribo7891">
          <img src="/img/twitter-with-circle.svg" width="20px" alt="twitter" /> Twitter</a>
        <a className="list-inline-item badge badge-pill badge-dark" href="https://www.linkedin.com/in/harry-crank-a1164b151/">
          <img src="/img/linkedin-with-circle.svg" width="20px" alt="linkedin" /> LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
