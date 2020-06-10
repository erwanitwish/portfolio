import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import AOS from "aos";
import "aos/dist/aos.css";
import datas from "./../Datas/datas.json";
import ProjectTitle from "./projectTitle";
import Navigation from "./navigation";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import ProjectOverview from "./projectOverview";
import Test from "./test.jsx";

export default function Home() {
  const [IsOver, setIsOver] = useState(false);
  const [activeLink, setActiveLink] = useState();

  AOS.init();

  const over = (e) => {
    setIsOver(true);
    if (e === "manny") {
      setActiveLink("overview_manny.png");
    } else if (e === "teleport") {
      setActiveLink("overview_teleport.png");
    } else if (e === "arsenic") {
      setActiveLink("overview_arsenic.png");
    }
  };

  const out = () => {
    setActiveLink(false);
  };

  return (
    <div>
      <Navigation ancre="nav" />

      <div className="titles">
        <Link to="/project/manny">
          <ProjectTitle
            onMouseIn={() => over("manny")}
            onMouseOut={out}
            Title={datas.Manny.name}
          />
        </Link>

        <Link to="/project/teleport-me">
          <ProjectTitle
            onMouseIn={() => over("teleport")}
            onMouseOut={out}
            Title="Teleport Me"
          />
        </Link>
        <Link to="/project/arsenic-cocktail">
          <ProjectTitle
            onMouseIn={() => over("arsenic")}
            onMouseOut={out}
            Title="Arsenic Cocktail"
          />
        </Link>
      </div>
      {activeLink && <ProjectOverview link={activeLink} />}

      <AboutMe ancre="about" />
      <Contact ancre="contact" />
    </div>
  );
}
