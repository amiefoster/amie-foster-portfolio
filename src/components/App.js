import react from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Values from "./Values";
import Contact from "./Contact";
import Footer from "./Footer";
import "../App.css";


function App() {
  return (
    <div>
      <Navbar />
      {/* <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content"></div> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Values />
        <Contact />
        <Footer />
      
    </div>
  );
}

export default App;
