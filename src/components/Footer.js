import linkedin from '../images/linkedin-white.png'
import github from '../images/github-white.png'
import medium from '../images/medium-white.png'
import gmail from '../images/gmail-white.png'


function Footer() {
    return (
      <div className=" col-md-12 footer-container">
        <img src={linkedin} alt="" className="footer-icon" />
        <img src={medium} alt="" className="footer-icon" />
        <img src={github} alt="" className="footer-icon" />
        <img src={gmail} alt="" className="footer-icon" />

      </div>
    );
  }
  
  export default Footer;