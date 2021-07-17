import React from "react";
import { Switch, Route } from "react-router";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import "./App.css";



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' render={()=> <Home />} />
        <Route exact path='/about' render={()=> <About />} />
        <Route exact path='/contact' render={()=> <Contact />} />
        <Route exact path='/projects' render={()=> <Projects />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
