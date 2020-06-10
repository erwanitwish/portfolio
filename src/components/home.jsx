import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./navigation";
import AnimationHome from "./animationHome.jsx";
import AboutMe from "./aboutMe";
import Contact from "./contact";

export default function Home() {
  AOS.init();
  return (
    <>
      <div className="fixed">
        <Navigation ancre="nav" />
      </div>
      <AnimationHome />
      <AboutMe ancre="about" />
      <Contact ancre="contact" />
    </>
  );
}
