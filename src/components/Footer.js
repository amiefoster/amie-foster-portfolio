import linkedin from '../images/linkedin-tan.png'
import github from '../images/github-tan.png'
import medium from '../images/medium-tan.png'
import gmail from '../images/email-tan.png'


function Footer() {
    return (
 
      <div className=" col-md-12 footer-container">
        <a
            href="https://www.linkedin.com/in/amie-n-foster/"
            target="_blank"
            className="background-none"
          >
        <img src={linkedin} alt="" className="footer-icon" />
        </a>
        <a
        href="https://medium.com/@amie.n.foster"
            target="_blank"
            className="background-none"
          >
        <img src={medium} alt="" className="footer-icon" />
        </a>
        <a
            href="https://github.com/amiefoster"
            target="_blank"
            className="background-none"
          >
        <img src={github} alt="" className="footer-icon" />
        </a>
        <a
            href="mailto: amie.n.foster@gmail.com"
            target="_blank"
            className="background-none"
          >
        <img src={gmail} alt="" className="footer-icon" />
        </a>

      </div>
    
    );
  }
  
  export default Footer;