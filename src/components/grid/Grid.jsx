import React from "react";
import "./Grid.css";
import { projectList } from "../../constants/ProjectList";
import { TEXT } from "../../constants/ProjectList";

const Grid = () => {
  const {action,action_2} = TEXT.GRID
  return (
    <div className="grid">
      {projectList.map((project) => (
        <div className="project" key={project.id}>
          <p className="project-title">{project.title}</p>
          <p className="information display">{project.information}</p>
          <p className="stack display">{`Build with ${project.stack}`}</p>

          <a className="link display" href={project.code}>
            {action}
          </a>

          {project.website ? (
            <a className="link display" href={project.website}>
           {action_2}
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Grid;
