import React from "react";
import "./Project.css";
import Fade from "react-reveal/Fade";
import Grid from "../../components/grid/Grid";

export default function Projects() {
  return (
    <div className="projects">
      <Fade>
        <div className="title">
          <h1>Projects</h1>
          <i className="far fa-file-code"></i>
        </div>
          <div className="content">
                <Grid />
          </div>
      </Fade>
    </div>
  );
}