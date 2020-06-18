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
import ProjectNavigation from "./projectNavigation";
import datas from "./../Datas/datas.json";

export default function Project() {
  let { project_name } = useParams();

  const contentChoice = () => {
    if (project_name === "manny") {
      return (
        <div className='full-project'>
          <ProjectNavigation />
          <div className='project-top'>
            <div className='project-intro'>
              <div className='project-title'>
                <ProjectTitle Title={datas.Manny.name} />
              </div>
              <div className='project-technos'>
                <ProjectSummary text={datas.Manny.resume} />
              </div>
            </div>
          </div>
          <div className='project-over'>
            <ProjectContent
              visuel1={datas.Manny.overviewLink}
              content1={datas.Manny.content1}
            />
          </div>
        </div>
      );
    } else if (project_name === "teleport-me") {
      return (
        <div className='full-project'>
          <ProjectNavigation />
          <ProjectTitle Title={datas.TeleportMe.name} />
          <ProjectOverview link={datas.TeleportMe.overviewLink} />
          <ProjectSummary text={datas.TeleportMe.resume} />
          <ProjectContent content1={datas.TeleportMe.content1} />
        </div>
      );
    } else if (project_name === "arsenic-cocktail") {
      return (
        <div className='full-project'>
          <ProjectNavigation />
          <ProjectTitle Title={datas.ArsenicCocktail.name} />
          <ProjectOverview link={datas.ArsenicCocktail.overviewLink} />
          <ProjectSummary text={datas.ArsenicCocktail.resume} />
          <ProjectContent content1={datas.ArsenicCocktail.content1} />
        </div>
      );
    }
  };

  return <>{contentChoice()}</>;
}
