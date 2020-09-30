import React from "react"

export default function Closing() {
  return (
    <div className="closing-container">
      <div className="closing-header">Load The Bar</div>
      <div className="closing-subheader">You've made it this far. All there is left to do head over to the app store and download Bar Is Loaded today.</div>
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
          href="https://play.google.com/store/apps/details?id=com.dongledan.barisloaded&hl=en_US"
        >
          <div className="google-play" />
        </a>
      </div>
    </div>
  )
}
