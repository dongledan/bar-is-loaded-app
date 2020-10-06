import React from "react"

import { reviews } from "../content/Reviews"

export default function Reviews() {
  const content = [
    <strong className="review">
      it's more than calculating plates, there’s also neat info hidden around
      the app like learning about wilks and RPE
    </strong>,
    <strong className="review">
      It’s super easy to use, i like the plateau tab because there’s solid info
      there. I like the estimated max and meet prep a lot
    </strong>,
    <strong className="review">
      It takes everything into consideration including weight conversions, meet
      advice, rpe calculator
    </strong>,
    <strong className="review">
      This app is very useful for any lifters whether they are just starting or
      have been in the powerlifting world for years
    </strong>,
    <strong className="review">
      Stepping into certain gyms, like mount Vernon, they have sheets up that
      say “4 reds and a silver = this amount of weight” so this app is pretty
      useful and fulfills it’s purpose
    </strong>,
    <strong className="review">
      It’s being a struggle understanding the change of weight but this app
      makes it easy peasy
    </strong>,
  ]
  return (
    <div className="reviews-container">
      <div className="review-header">From Your Swole Mates <br/>⚪ ⚪ ⚪</div>
      {reviews.map((review, i) => (
        <div key={review.author} className="single-review">
          <div className="title-container">
            <div className="stars">★★★★★</div>
            <div className="review-title">“{review.title}”</div>
            <div className="review-author">
              by {review.author} via App Store
            </div>
          </div>

          <div className="review-content">
            {review.begin}
            {content[i]}
            {review.end}
          </div>
        </div>
      ))}
    </div>
  )
}
