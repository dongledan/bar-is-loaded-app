import React from 'react';

import iphone from '../images/iphone.png';

export default function Hero({ siteTitle }) {
 return (
  <div className="hero-container">
    <div className="width-container">
      <div className="hero-content-container">
        <div className="header">It's leg day, not brain day.</div>
        <div className="subtitle">The modern barbell calculator for calculating plates needed. Focus on the lift, not the math.</div>
        <div className="button-container">
          <button className="app-store"></button>
          <button className="google-play"></button>
        </div>
      </div> 
      <img src={iphone} className="hero-iphone" />
    </div>
  </div>
 )
}
 