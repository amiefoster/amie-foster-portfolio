import react from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Values from "./Values";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-scroll";
import { useState } from "react";
import "../App.css";
import smile from "../images/smile-yellow.png"


function App() {
  return (
    <div>
      <Navbar />
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="content">
        <Home />
        <About />
        {/* <img src={smile} className="skill-smiley"/> */}

        <Skills />
        <Projects />
        <Values />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
