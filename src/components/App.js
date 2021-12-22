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
      <h1>Amie Fosters Portfolio</h1>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
