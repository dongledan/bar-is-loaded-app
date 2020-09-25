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
                <div className="feature-title">{feature.title}</div>
                <div className="feature-content">{feature.content}</div>
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
              key={i}
            >
              <div className="box" />
              <div className="feature-container">
                <div className="feature-title">{feature.title}</div>
                <div className="feature-content">{feature.content}</div>
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
