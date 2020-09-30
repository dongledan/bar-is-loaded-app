import React, { Component } from "react"

import { appFeatures } from "../content/Content"
import iphone from "../images/iphone.png"

export default class Content extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {appFeatures.map((feature, i) =>
          i === 0 ? (
            <div className="content-container" key={i}>
              <div className="box" />
              <div className="feature-container">
                <div className="feature-title">
                  {feature.title}
                  <div className="feature-line" />
                </div>
                <div className="feature-content">{feature.content}</div>
                <div className="stars">★★★★★</div>
                <div className="review-title">{feature.reviewTitle}</div>
                <div className="review"><span className="quote">"</span>{`\xa0`}{`\xa0`}{feature.review}<span className="quote">"</span></div>
                <div className="review-author">By {feature.author} via the App Store</div>
              </div>
              <img
                className="iphone"
                src={iphone}
                style={{ backgroundImage: `url(${feature.image})` }}
              />
            </div>
          ) : (
            <div
              className="content-container"
              data-sal="fade"
              data-sal-easing="ease-out-back"
              data-sal-delay="200"
              key={i}
            >
              <div className="box" />
              <div className="feature-container">
                <div className="feature-title">
                  {feature.title}
                  <div className="feature-line" />
                </div>
                <div className="feature-content">{feature.content}</div>
                <div className="stars">★★★★★</div>
                <div className="review-title">{feature.reviewTitle}</div>
                <div className="review"><span className="quote">"</span>{`\xa0`}{`\xa0`}{feature.review}<span className="quote">"</span></div>
                <div className="review-author">By {feature.author} via the App Store</div>
              </div>
              <img
                className="iphone"
                src={iphone}
                style={{ backgroundImage: `url(${feature.image})` }}
              />
            </div>
          )
        )}
      </div>
    )
  }
}
