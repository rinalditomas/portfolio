import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { TEXT } from "../../constants/ProjectList";

export default function Home() {
  const { title, subtitle } = TEXT.HOME;
  return (
    <div className="home">
      <Fade>
        <div className="home-background">
          <img
            src="https://res.cloudinary.com/dssllfoin/image/upload/v1620070230/blob_zlfn7u.svg"
            alt="home-blob"
          />
        </div>
        <h1>
          {title}
          <br />
          {subtitle}
        </h1>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/tomas-rinaldi-b4745b86/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/rinalditomas">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Fade>
    </div>
  );
}
