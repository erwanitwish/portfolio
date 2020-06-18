import React from "react";
import { Link } from "react-router-dom";

export default function ProjectNavigation() {
  return (
    <nav className="navigation project-nav">
      <div>Erwan Quillec</div>
      <ul>
        <li>
          <a id="nav-item" href="#top">
            Works
          </a>
        </li>
        <li>
          <a id="nav-item" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a id="nav-item" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
