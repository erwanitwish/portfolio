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
    <div className="about" id={ancre}>
      <div className="about-top">
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
          <div className="softwares-title">Languages</div>
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
      <div className="pro-xp">
        <div className="xp-title">Experiences</div>
        <div className="xp">
          <div className="xp-detail">
            <p className="company">Wild Code School</p>
            <p className="job">Web Developer</p>
            <p className="job-about">
              Learning web development on fake and real projects
            </p>
          </div>
          <div className="xp-detail">
            <p className="company">Rosemood</p>
            <p className="job">Team Manager</p>
            <p className="job-about">
              Leading a team of graphic designer working on new products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
