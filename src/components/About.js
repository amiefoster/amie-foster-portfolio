import linkedin from "../images/linkedin-green.png";
import email from "../images/email-green.png";
import github from "../images/github-green.png";
import medium from "../images/medium-green.png";

function About() {
  return (
    <div id="about" className=" about-container">
      <div className="background-none">
        <h5 className="background-none about-text">
          Hi, I'm Amie 👋 a software engineer with a background in customer
          service. I always had a curiosity for coding and began teaching myself
          online as a fun hobby when I quickly realized I wanted to pursue it as
          a career. 🧐 I found my passion for coding in the combination of
          math/science and creativity. 💻 I am a recent graduate of the Software
          Engineering Bootcamp at Flatiron School, where I spent 15 weeks
          refining my skills as a full-stack developer. I am eager to find my
          place on a collaborative team of talented individuals where I can
          continue expanding my knowledge and developing new skills. 👩‍💻 When I'm
          not coding new projects, you can find me hiking and exploring nature
          🥾, curled up reading a mystery novel 📚, or listening to a true-crime
          podcast 🕵️‍♀️.
        </h5>
      </div>
      <div className="row justify-content-center background-none about-image-container">
        <div className="col-md-1 background-none ">
          <a
            href="https://www.linkedin.com/in/amie-n-foster/"
            target="_blank"
            className="background-none"
          >
            <img src={linkedin} className="about-image background-none" />
          </a>
        </div>
        <div className="col-md-1 background-none">
          <a
            href="https://github.com/amiefoster"
            target="_blank"
            className="background-none"
          >
            <img src={github} className="about-image background-none" />
          </a>
        </div>
        <div className="col-md-1 background-none">
          <a
            href="https://medium.com/@amie.n.foster"
            target="_blank"
            className="background-none"
          >
            <img src={medium} className="about-image background-none" />
          </a>
        </div>
        <div className="col-md-1 background-none">
          <a
            href="http://letsmakeplanz.herokuapp.com/"
            target="_blank"
            className="background-none"
          >
            <img src={email} className="about-image background-none" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
