import React from "react";
import Fade from "react-reveal/Fade";
export default function ProjectOverview({ link }) {
  return (
    <div className="project-overview">
      <Fade>
        <img src={require(`../visuels/${link}`)} alt="first"></img>
      </Fade>
    </div>
  );
}
