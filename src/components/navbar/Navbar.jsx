import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { TEXT } from "../../constants/ProjectList";

const Navbar = ({ ABOUT, HOME, CONTACT, PROJECTS }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  const closeMobileMenu = () => setShowMenu(false);
  const { home, about, contact, projects } = TEXT.NAVBAR;

  return (
    <>
      <nav className="navbar">
        <Link to={HOME} className="navbar-logo"></Link>

        <div className="menu-icon" onClick={handleMenu}>
          <i className={showMenu ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to={HOME} className="nav-links" onClick={closeMobileMenu}>
              {home}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ABOUT} className="nav-links" onClick={closeMobileMenu}>
              {about}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={PROJECTS} className="nav-links" onClick={closeMobileMenu}>
              {projects}
            </Link>
          </li>

          <li className="nav-item">
            <Link to={CONTACT} className="nav-links" onClick={closeMobileMenu}>
              {contact}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
