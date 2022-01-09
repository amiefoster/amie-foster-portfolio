import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import ruby from "../images/ruby.png";
import ror from "../images/ror.png";

function Skills() {
    return (
      <div id="skills" className="content">
        <div className="row justify-content-center">
        <div className="col-md-12 skills-container justify-content-center">
          
          <img src={javascript} className="skill-icon" />
          <img src={react} className="skill-icon" />
          <img src={ruby}className="skill-icon"  />
          <img src={ror} className="skill-icon" />
          <img src={html} className="skill-icon" />
          <img src={css} className="skill-icon" />
          <img src={bootstrap} className="skill-icon" />

        </div>
      </div>
      </div>
    );
  }
  
  export default Skills;