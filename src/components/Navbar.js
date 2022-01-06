import { NavLink, Link } from "react-router-dom";

function Navbar( {toggleShowHome} ) {
    return (
      <div className="row">
        <div className="col-sm-6 nav-left">
          <p className="nav-name">Amie Foster 👩🏼‍💻</p>
        </div>
        <div className="col-sm-6 nav-right">
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

      </div>
    );
  }
  
  export default Navbar;