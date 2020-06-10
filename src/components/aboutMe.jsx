import React from "react";
import html from "../visuels/logos/html.png";
import css from "../visuels/logos/css.png";
import react from "../visuels/logos/react.png";
import node from "../visuels/logos/nodejs.png";
import ps from "../visuels/logos/ps.png";
import ai from "../visuels/logos/ai.png";
import xd from "../visuels/logos/xd.png";
import git from "../visuels/logos/git.png";
import atom from "../visuels/logos/atom.png";
import jira from "../visuels/logos/jira.png";

export default function AboutMe({ ancre }) {
  return (
    <div
      className="about"
      data-aos="fade-right"
      data-aos-duration="1000"
      id={ancre}
    >
      <div className="skills">
        <div className="skills-title">Skills</div>
        <div className="items">
          <div>Agile Project Management</div>
          <div>Web Developpement</div>
          <div>UX/UI Design</div>
          <div>Team Management</div>
          <div>Graphic Design</div>
        </div>
      </div>
      <div className="softwares">
        <div className="softwares-title">Softwares</div>
        <div className="logos">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={ps} alt="" />
          <img src={ai} alt="" />
          <img src={xd} alt="" />
          <img src={git} alt="" />
          <img src={atom} alt="" />
          <img src={jira} alt="" />
        </div>
      </div>
    </div>
  );
}
