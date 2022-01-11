import linkedin from '../images/linkedin-tan.png'
import github from '../images/github-tan.png'
import medium from '../images/medium-tan.png'
import gmail from '../images/email-tan.png'


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