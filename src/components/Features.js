import React, { Component } from "react"
import {
  IoIosSpeedometer,
  IoIosContrast,
  IoIosPricetag,
  IoIosFitness,
  IoIosListBox,
  IoIosMore,
} from "react-icons/io"

export default class Features extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="features-container">
        <div className="features-box">
          <div className="icon-container">
            <IoIosSpeedometer className="icon" />
            <div className="feature-title">Fast & Accurate</div>
            <div className="feature-content">
              Find calculations instantly. Change weights instantly.
            </div>
          </div>
          <div className="icon-container">
            <IoIosPricetag className="icon" />
            <div className="feature-title">Free</div>
            <div className="feature-content">
              What's better than free? You get all the features without having
              to pay.
            </div>
          </div>
          <div className="icon-container">
            <IoIosContrast className="icon" />
            <div className="feature-title">Dark Mode</div>
            <div className="feature-content">
              Automatically detects system settings based on your preferences.
            </div>
          </div>
          <div className="icon-container">
            <IoIosFitness className="icon" />
            <div className="feature-title">One Rep Max</div>
            <div className="feature-content">
              Find your one rep max based on your current lifts. Easy, fast, and
              safe.
            </div>
          </div>
          <div className="icon-container">
            <IoIosListBox className="icon" />
            <div className="feature-title">Percent Tables</div>
            <div className="feature-content">
              Easily warm up with the built in percent table. Need to find 85%
              of a weight?
            </div>
          </div>
          <div className="icon-container">
            <IoIosMore className="icon" />
            <div className="feature-title">& More!</div>
            <div className="feature-content">
              There is constantly new and updated information!
            </div>
          </div>
        </div>
      </div>
    )
  }
}
