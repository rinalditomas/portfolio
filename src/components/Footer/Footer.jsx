import React from "react";
import { TEXT } from "../../constants/ProjectList";
import "./Footer.css";

export default function Footer() {
  const { title, name } = TEXT.FOOTER;
  return (
    <div className="footer">
      <span style={{ color: "black" }}>
        {title}{" "}
        <a href="https://www.linkedin.com/in/tomas-rinaldi-b4745b86/">{name}</a>
      </span>
    </div>
  );
}
