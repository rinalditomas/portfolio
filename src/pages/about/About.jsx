import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Fade from "react-reveal/Fade";
import { TEXT } from "../../constants/ProjectList";

export default function About() {
  const { title, action } = TEXT.ABOUT;

  return (
    <div className="about">
      <Fade cascade>
        <div className="title">
          <h1>{title}</h1>
          <i className="far fa-laugh-beam"></i>
        </div>
        <div className="text">
          <h2>
            I'm Tomas Rinaldi Scatena, I’m an Argentinian developer living in
            Europe focused in <span>Front-end</span> and <span>Back-end</span>{" "}
            technologies, fan of traveling and tasty food.
          </h2>
          <br />
          <h2>
            My journey into programming began learning the basics of{" "}
            <span>HTML</span>,<span>CSS</span> and <span>JavaScript</span> by
            myself. After writing my first line of code I was hooked. So I
            started an 800 hours intensive training program based on software
            development focused on <span>Front-end</span>, <span>Back-end</span>{" "}
            and <span>Database</span> while working in teams and applying{" "}
            <span>agile methodologies</span>.
          </h2>{" "}
          <br />
          <h2>
            I'm looking forward to enhance my knowledge and learn new
            technologies by working in a challenging enviroment
          </h2>
        </div>
        <div className="btnContainer">
          <Link to="/contact" className="btn">
            {action}
          </Link>
        </div>
      </Fade>
    </div>
  );
}
