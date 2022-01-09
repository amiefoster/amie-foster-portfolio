import { Link } from 'react-scroll';

function Navbar() {
    return (
      <div className="row nav-bar">
        <div className="col-sm-6 nav-left">
          <p className="nav-name">Amie Foster 👩🏼‍💻</p>
        </div>
        <div className="col-sm-6 nav-right">
        <Link className="nav-button" to="about" spy={true} smooth={true} >
          About
        </Link>
        <Link className="nav-button" to="skills" spy={true} smooth={true} >
          Skills
        </Link>
        <Link className="nav-button" to="projects" spy={true} smooth={true} >
          Projects
        </Link>
        <Link className="nav-button" to="contact" spy={true} smooth={true} >
          Contact
        </Link>
        </div>

      </div>
    );
  }
  
  export default Navbar;