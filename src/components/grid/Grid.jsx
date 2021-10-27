import React from "react";
import "./Grid.css";
import { projectList } from "../../constants/ProjectList";

const Grid = () => {
  return (
    <div className="grid">
      {projectList.map((project) => (
        <div className="project" key={project.id}>
          <p className="project-title">{project.title}</p>
          <p className="information display">{project.information}</p>
          <p className="stack display">{`Build with ${project.stack}`}</p>

          <a className="link display" href={project.code}>
            Check the code
          </a>

          {project.website ? (
            <a className="link display" href={project.website}>
              Check the app
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Grid;
