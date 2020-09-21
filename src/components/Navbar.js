import React from 'react';

import logo from '../images/logo.png';

export default function Navbar() {
 return (
  <div style={{position: 'absolute', top: 0, width: '100%', zIndex: 99}}>
    <div className="navbar-container">
      <nav className="navbar">
        <div className="left-container">
          <img className="logo" src={logo} alt="logo-icon"/>
          <div className="link-text">Bar Is Loaded</div>
        </div>
        <div className="right-container">
          <div className="link-text">Features</div>
          <div className="link-text">Contact</div>
        </div>

      </nav>
    </div>
  </div>
 )
}
