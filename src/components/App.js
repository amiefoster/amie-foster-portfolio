import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from './Skills';
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import "../App.css";
import react from "react";

function App() {
  const [showHome, setShowHome] = useState(true);

  const toggleShowHome = () => {
    setShowHome(false)
  }

  return (
    <div>
      <Navbar toggleShowHome={toggleShowHome} />
      {showHome && <div><Home /> <About /> <Skills /> <Projects /> <Contact /></div>}
      

      <Routes>
        <Route exact path="/amiefoster/amie-foster-portfolio" index element={<Home />}  />
        <Route exact path="/About" index element={<About />}  />
        <Route exact path="/Skills" index element={<Skills />}  />
        <Route exact path="/Projects" index element={<Projects />}  />
        <Route exact path="/Contact" index element={<Contact />}  />
        
      </Routes>

      <Footer />
       
    </div>
  );
}

export default App;

//nav bar notes
  //maybe you just render all components on the top level
    //have buttons in "nav" and then onclick navigate using usehistory to that component