import { Typewriter } from "typewriting-react";
import pic from "../images/amie.JPG";

function Home() {
  return (
    <div id="home" className="content">
      <div className="container">
        <div className="row justify-content-center home-container">
          <div className="col-md-4">
            <img className="profile-image" src={pic}></img>
          </div>
          <div className="col-md-4 justify-content-center">
            <div className="home-name">
              Hi, I'm Amie <span className="wave">👋</span>
            </div>
            <Typewriter
              className="typewriter"
              cursorClassName="cursor"
              words={[
                "Software Engineer ",
                "Flatiron Graduate ",
                "True Crime Lover ",
              ]}
              nextWordDelay={2050}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
