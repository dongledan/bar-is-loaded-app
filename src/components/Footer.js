import React from "react"
import { Link } from "gatsby"
import {
  FaGithub,
  FaEnvelope,
  FaApple,
  FaGooglePlay,
  FaAngleUp,
} from "react-icons/fa"
import smoothscroll from "smoothscroll-polyfill"

import { scrollToTop } from "../utils"

try {
  smoothscroll.polyfill()
} catch (error) {
  console.log(error)
}

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className=" copyright-container">
        <div className="footer-social-container">
          <a className="footer-social icon" href="mailto:dongledan@yahoo.com">
            <FaEnvelope />
          </a>
          <a
            className="footer-social icon"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/dongledan/bar-is-loaded"
          >
            <FaGithub />
          </a>
          <a
            className="footer-social icon"
            rel="noopener noreferrer"
            target="_blank"
            href="https://apps.apple.com/us/app/bar-is-loaded-gym-calculator/id1509374210"
          >
            <FaApple />
          </a>
          <a
            className="footer-social icon"
            rel="noopener noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.dongledan.barisloaded&hl=en_US"
          >
            <FaGooglePlay />
          </a>
        </div>
        <div className="footer-links-container">
          <Link className="footer-link" to={"/privacy-policy"}>
            Privacy Policy
          </Link>
          <span> • </span>
          <a className="footer-link" href="mailto:dongledan@yahoo.com">
            Contact
          </a>
          <span> • </span>

          <a
            className="footer-link"
            style={{ color: "#E42218" }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://dannyboy.dev/"
          >
            Danny Li
          </a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Danny Li. All rights reserved.
        </div>
      </div>
      <div className="back-to-top-container">
        <a className="back-to-top" onClick={() => scrollToTop()}>
          <div className="arrow">
            <FaAngleUp />
          </div>
          Back to top
        </a>
      </div>
    </footer>
  )
}
