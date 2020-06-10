import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ProjectTitle from "./projectTitle";
import ProjectOverview from "./projectOverview";
import ProjectContent from "./projectContent";
import ProjectSummary from "./projectSummary";
import datas from "./../Datas/datas.json";

export default function Project() {
  let { project_name } = useParams();

  const contentChoice = () => {
    if (project_name === "manny") {
      return (
        <div>
          <ProjectTitle Title={datas.Manny.name} />
          <ProjectOverview link={datas.Manny.overviewLink} />
          <ProjectSummary text={datas.Manny.resume} />
          <ProjectContent content={datas.Manny.content1} />
        </div>
      );
    } else if (project_name === "teleport-me") {
      return (
        <div>
          <ProjectTitle Title={datas.TeleportMe.name} />
          <ProjectOverview link={datas.TeleportMe.overviewLink} />
          <ProjectSummary text={datas.TeleportMe.resume} />
          <ProjectContent content={datas.TeleportMe.content1} />
        </div>
      );
    } else if (project_name === "arsenic-cocktail") {
      return (
        <div>
          <ProjectTitle Title={datas.ArsenicCocktail.name} />
          <ProjectOverview link={datas.ArsenicCocktail.overviewLink} />
          <ProjectSummary text={datas.ArsenicCocktail.resume} />
          <ProjectContent content={datas.ArsenicCocktail.content1} />
        </div>
      );
    }
  };

  return <>{contentChoice()}</>;
}
