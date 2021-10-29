import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import { TEXT } from "./constants/ProjectList";
import "./App.css";

function App() {
  const { ABOUT, HOME, CONTACT, PROJECTS } = TEXT.ROUTES;

  return (
    <>
      <Navbar ABOUT={ABOUT} HOME={HOME} CONTACT={CONTACT} PROJECTS={PROJECTS} />
      <Switch>
        <Route exact path={HOME} render={() => <Home />} />
        <Route exact path={ABOUT} render={() => <About />} />
        <Route exact path={CONTACT} render={() => <Contact />} />
        <Route exact path={PROJECTS} render={() => <Projects />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
