import React, { Component } from "react"

import iphone from "../images/iphone.png"

export default class Hero extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="hero-container">
        <div className="width-container">
          <div className="hero-content-container">
            <div className="header">It's leg day,</div>
            <div className="header">not brain day.</div>
            <div className="subtitle">
              The modern barbell calculator for calculating plates needed. Focus
              on the lift, not the math.
            </div>
            <div className="button-container">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://apps.apple.com/us/app/bar-is-loaded-gym-calculator/id1509374210"
              >
                <div className="app-store" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.dongledan.barisloaded2&hl=en_US"
              >
                <div className="google-play" />
              </a>
            </div>
          </div>
          <img id="iphone" src={iphone} className="hero-iphone" />
        </div>
      </div>
    )
  }
}
