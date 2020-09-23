import React from 'react';

import {features} from '../content/Features';
import iphone from '../images/iphone.png';

export default function Content() {
  return (
    <div>
      {features.map((feature, i) => (
        <div className="content-container" data-sal="fade" data-sal-delay="500" data-sal-easing="ease-out-back" key={i}>
          <div className="box" />
          <div className="feature-container">
            <div className="feature-title">{feature.title}</div>
            <div className="feature-content">{feature.content}</div>
          </div>
          <img className='iphone' src={iphone} style={{backgroundImage: `url(${feature.image})`}}/>
       </div>
      ))}
    </div>
  )
}
