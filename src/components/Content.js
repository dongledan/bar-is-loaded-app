import React from "react"
import image0 from "../images/img-0.png"
import image2 from "../images/img-2.png"
import image3a from "../images/img-3a.png"
import image3 from "../images/img-3.png"
import image4 from "../images/img-4.png"
import image5 from "../images/img-5.png"
import image6 from "../images/img-6.png"

export default function Content() {
  return (
    <div className="content-container">
      <div className="content-title">Your Everyday Gym Calculator</div>
      <div className="content-title-content">
        Quick maths is hard, especially when the pre-workout kicks in.{" "}
        <strong>Bar Is Loaded</strong> takes the math out of the gym and
        displays exactly what you need for your next lift. It doesn't matter if
        it's in <strong>kilograms</strong> or <strong>pounds</strong>, we got
        you covered.{" "}
      </div>
      <div className="content-grid">
        <h2 className="content-header multi">
          Customize. Calculate. Lift.
          <div className="content-line" />
        </h2>
        <div className="content-subheader">
          No reds, all blues? Don't be blue! Change your{" "}
          <strong>inventory</strong> seamlessly. It's never been easier with{" "}
          <strong>Bar Is Loaded</strong>.
        </div>
        <div className="content-image">
          <img src={image0} className="image one" />
          <img src={image2} className="image two" />
        </div>
      </div>
      <div className="content-grid column-length">
        <h2 className="content-header-2">
          Stuck? We Got You.
          <div className="content-line" />
        </h2>
        <div className="content-subheader-2">
          A lift has stalled and you've tried everything. We've all been there.
          Here are some <strong>exercises</strong> to help break through.
        </div>
        <div className="content-image">
          <img src={image3a} className="image one" />
          <img src={image3} className="image two" />
        </div>
      </div>
      <div className="content-grid">
        <h2 className="content-header">
          All In One App.
          <div className="content-line" />
        </h2>
        <div className="content-subheader">
          Upcoming <strong>powerlifting meet</strong>? Got{" "}
          <strong>Wilks</strong>? <strong>RPE</strong>/<strong>RIR</strong>{" "}
          training? <strong>Bar Is Loaded</strong> has it all. It's more than
          just calculations.
        </div>
        <div className="content-image">
          <img src={image4} className="image one" />
          <img src={image5} className="image three" />
          <img src={image6} className="image four" />
        </div>
      </div>
    </div>
  )
}
