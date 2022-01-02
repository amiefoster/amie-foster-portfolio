import { NavLink, Link } from "react-router-dom";

function Navbar( {toggleShowHome} ) {
    return (
      <div className="nav-bar">
        <NavLink className="nav-button" to="/" >
          Home
        </NavLink>
        <NavLink className="nav-button" to="/About" onClick={toggleShowHome} >
          About
        </NavLink>
        <NavLink className="nav-button" to="/Skills" onClick={toggleShowHome}>
          Skills
        </NavLink>
        <NavLink className="nav-button" to="/Projects" onClick={toggleShowHome}>
          Projects
        </NavLink>
        <NavLink className="nav-button" to="/Contact" onClick={toggleShowHome}>
          Contact
        </NavLink>
      </div>
    );
  }
  
  export default Navbar;