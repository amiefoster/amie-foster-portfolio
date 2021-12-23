import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="nav-bar">
        <NavLink className="nav-button" to="/">
          Home
        </NavLink>
        <NavLink className="nav-button" to="/About">
          About
        </NavLink>
        <NavLink className="nav-button" to="/Skills">
          Skills
        </NavLink>
        <NavLink className="nav-button" to="/Projects">
          Projects
        </NavLink>
        <NavLink className="nav-button" to="/Contact">
          Contact
        </NavLink>
      </div>
    );
  }
  
  export default Navbar;