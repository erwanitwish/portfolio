import React from "react";
import datas from "./../Datas/datas.json";

export default function ProjectContent({ content1, visuel1 }) {
  return (
    <div className='full-content'>
      <img src={require(`../visuels/${visuel1}`)} alt='' />
      <div className='project_part2'>
        <p>{content1}</p>
        <img src={require(`../visuels/${visuel1}`)} />
      </div>
    </div>
  );
}
