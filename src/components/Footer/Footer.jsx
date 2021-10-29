import React from "react";
import { TEXT } from "../../constants/ProjectList";
export default function Footer() {
  const { title, name } = TEXT.FOOTER;
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        fontSize: "0.8em",
        marginTop: "2rem",
        height: "5rem",
      }}
    >
      <span style={{ color: "black" }}>
        {title}{" "}
        <a href="https://www.linkedin.com/in/tomas-rinaldi-b4745b86/">{name}</a>
      </span>
    </div>
  );
}
