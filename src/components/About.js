import linkedin from "../images/linkedin-green.png";
import email from "../images/email-green.png";
import github from "../images/github-green.png";
import medium from "../images/medium-green.png";

function About() {
  return (
    <div id="about" className=" about-container">
      <div className="background-none">
        <h5 className="background-none about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          vestibulum, tellus eget consectetur consectetur, eros tellus
          condimentum justo, vel tincidunt felis libero a ante. Donec non
          bibendum nisi. Donec vitae diam lectus. Cras sodales dui at justo
          pharetra, eget aliquet risus consequat. Pellentesque tortor leo,
          lobortis et luctus eu, ullamcorper a odio. Nulla egestas sed eros non
          vehicula. Mauris malesuada est vitae dui dictum, ut fringilla lorem
          ullamcorper. Phasellus tellus lacus, facilisis at semper tempor,
          rhoncus ac nisl. Sed pretium, nibh non aliquet rhoncus, nulla lacus
          ultricies mauris, a rutrum metus nulla vel est. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Vestibulum tincidunt dolor eu dui tincidunt facilisis. Etiam
          accumsan magna vel nulla gravida, ut euismod erat pharetra. Aenean vel
          libero rutrum, feugiat tellus sed, tempus tortor. In non ligula a nisi
          porttitor pellentesque. Quisque rhoncus ipsum eu metus congue, vitae
          porttitor nisl lobortis.
        </h5>
      </div>
      <div className="row justify-content-center background-none about-image-container">
        <div className="col-md-1 background-none ">
          <img src={linkedin} className="about-image background-none" />
        </div>
        <div className="col-md-1 background-none">
          <img src={github} className="about-image background-none" />
        </div>
        <div className="col-md-1 background-none">
          <img src={medium} className="about-image background-none" />
        </div>
        <div className="col-md-1 background-none">
          <img src={email} className="about-image background-none" />
        </div>
      </div>
    </div>
  );
}

export default About;
