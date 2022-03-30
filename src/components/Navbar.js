import React from "react";
import "../styles/style.css";

export default function Navbar({className, handlePageChange}) {
  return (
    <nav className="bar">
      <a
        className="link"
        href="#About"
        onClick={() => handlePageChange("Bio")}
        // className={currentPage === "Bio"}
      >
        About Me
      </a>
      <a className="link" href="#Work"
      onClick={() => handlePageChange("Work")}
      // className = {currentPage === "Work"}
      >
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
