import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.jpg"

export default function Navbar() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 2000,
        background: "#E22418",
      }}
    >
      <div className="navbar-container">
        <nav className="navbar">
          <Link className="left-container" to={"/"}>
            <img className="logo" src={logo} alt="logo-icon" />
            <div className="logo-content">
              <div className="logo-text">Bar Is Loaded — Gym Calculator</div>
              <div className="logo-price">Free</div>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}
