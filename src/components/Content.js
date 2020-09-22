import React from 'react';

import {features} from '../content/Features';

export default function Content() {
  return (
    <div>
      {features.map((feature, i) => (
        <div className="feature-container" data-sal="fade" data-sal-delay="500" data-sal-easing="ease-out-back" key={i}>
          <div className="feature-title">{feature.title}</div>
          <div className="feature-content">{feature.content}</div>
       </div>
      ))}
    </div>
  )
}
