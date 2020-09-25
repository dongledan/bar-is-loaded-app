import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <div style={{ position: "absolute", top: 0, width: "100%", zIndex: 99 }}>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="left-container">
            <img className="logo" src={logo} alt="logo-icon" />
            <div className="logo-text">Bar Is Loaded</div>
          </div>
        </nav>
      </div>
    </div>
  )
}
