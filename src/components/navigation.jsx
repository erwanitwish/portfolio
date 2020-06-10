import React from "react";

export default function Navigation({ ancre }) {
  return (
    <nav className="navigation">
      <div id={ancre}>Erwan Quillec</div>
      <ul>
        <li>
          <a href="#top">Works</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
