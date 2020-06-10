import React from "react";

export default function Navigation({ ancre }) {
  return (
    <nav id={ancre} className="navigation">
      <div>Erwan Quillec</div>
      <ul>
        <li>
          <a href="#nav">Works</a>
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
