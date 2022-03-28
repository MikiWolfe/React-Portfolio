import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="bar">
      <a className="link" href="#About">
        About Me
      </a>
      <a className="link" href="#Work">
        Work
      </a>
      <a className="link" href="#Contact">
        Contact Me
      </a>
      <a className="link" href="#" target="_blank">
        {" "}
        Resume
      </a>
    </nav>
  );
}
