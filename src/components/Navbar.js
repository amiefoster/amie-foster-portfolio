import up from '../images/up.png'
import { Link } from 'react-scroll';

function Navbar() {
    return (
      <div id="nav" className="row nav-bar">
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

        <Link className="home-button background-none" to="nav" spy={true} smooth={true}>
          <img src={up} className="background-none"/>
        </Link>
        </div>

      </div>
    );
  }
  
  export default Navbar;