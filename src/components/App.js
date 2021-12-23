import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from './Skills';
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route exact path="/About" index element={<About />} />
        <Route exact path="/Skills" index element={<Skills />} />
        <Route exact path="/Projects" index element={<Projects />} />
        <Route exact path="/Contact" index element={<Contact />} />
        
      </Routes>
       
    </div>
  );
}

export default App;
