import planz from "../images/planz.jpeg";
import wander from "../images/wander.jpeg";
import dander from "../images/dander.jpeg";
import jokester from "../images/jokester.jpeg";
import youtube from '../images/youtube-black.png';
import github from '../images/code-black.png';
import open from '../images/open-black.png';

function Project() {
  return (
    <div id="projects" className="" >
      <div className="row project-title">
        <h1 className="background-none">Projects</h1>
        <h6>Here are a few examples of my work.</h6>
      </div>

      <div className="row ">
        <div className="col-md-12 project-container justify-content-center">
          <div className="card border-rad project-card" style={{ width: "35rem", height: "40rem"}}>
            <div className="image-container">
              <img src={planz} className=" border-rad card-img-top project-img" alt="..." />
            </div>
            <div className="card-body border-rad background-white">
              <h5 className="card-title background-white">Planz</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">
                React, Ruby on Rails, BCrypt, Bootstrap, CSS, NPM
              </h6>
              <p className="card-text background-white">
                Planz is centralized hub for creating and organizing events.
                Users can log in, create an event, invite guests, and add event
                specific information. This full-stack application was created with a React frontent and Ruby on Rails backend with RESTFUL routes. Featuring BCrypt library to secure user passwords, and sessions and cookies to store user authentication.
              </p>
              <a
                href="http://letsmakeplanz.herokuapp.com/"
                className="card-link background-white"
                target="_blank"
              >
                <img src={open} className="project-links"/>
              </a>
              <a
                href="https://www.youtube.com/watch?v=OpcAtDManjA&feature=youtu.be"
                className="card-link background-white"
                target="_blank"
              >
                <img src={youtube} className="project-links youtube"/>
              </a>
              <a
                href="https://github.com/amiefoster/bash"
                className="card-link background-white"
                target="_blank"
              >
                <img src={github} className="project-links"/>
              </a>
            </div>
          </div>

          <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
            <div className="image-container">
              <img
                src={wander}
                className="border-rad card-img-top project-img"
                alt="..."
              />
            </div>
            <div className="card-body border-rad background-white">
              <h5 className="card-title background-white">Wander</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">
                React, Ruby on Rails, Google Maps API, Bootstrap, CSS
              </h6>
              <p className="card-text background-white">
                An app for avid hikers. Users can log in, discover hikes within national parks, and save hikes to their profile. Incorporating the Google Maps API, to display trailheads and general trail information, as well as dynamic routing for seamless navigation and seperation of concerns. Created with a React frontend and Ruby on Rails API backend with RESTful routes.
              </p>
              <a
                href="https://wanderproject.herokuapp.com/"
                className="card-link background-white"
                target="_blank"
              >
                <img src={open} className="project-links"/>
              </a>
              <a
                href="https://www.youtube.com/watch?v=TF_uBL9ChRQ"
                className="card-link background-white"
                target="_blank"
              >
                <img src={youtube} className="project-links youtube"/>
              </a>
              <a
                href="https://github.com/amiefoster/wander"
                className="card-link background-white"
                target="_blank"
              >
                <img src={github} className="project-links"/>
              </a>
            </div>
          </div>

          <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
            <div className="image-container">
              <img
                src={dander}
                className="border-rad card-img-top project-img"
                alt="..."
              />
            </div>
            <div className="card-body border-rad background-white">
              <h5 className="card-title background-white">Dander</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">
                React, Ruby, Sinatra, Active Record,CSS, NPM
              </h6>
              <p className="card-text background-white">
                A dating app for people who love pets! Users can match with
                potential love interests based on their furry companions and
                view matches that liked them back. Developed with Javascript/React front-end and Ruby/ActiveRecord/Sinatra back-end.
              </p>
              <a
                href="https://www.youtube.com/watch?v=oGnj3lPhW7U&feature=youtu.be"
                className="card-link background-white"
                target="_blank"
              >
                <img src={youtube} className="project-links youtube"/>
              </a>
              <a
                href="https://github.com/amiefoster/pet-tinder-frontend"
                className="card-link background-white"
                target="_blank"
              >
                <img src={github} className="project-links"/>
              </a>
            </div>
          </div>

          <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
            <div className="image-container">
              <img
                src={jokester}
                className="border-rad card-img-top project-img"
                alt="..."
              />
            </div>
            <div className="card-body border-rad background-white">
              <h5 className="card-title background-white">Jokester</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">
                React, CSS
              </h6>
              <p className="card-text background-white">
                Jokester is an app for users to find, and share jokes equipped
                with category filter and form to add new jokes.
              </p>
              <a
                href="https://www.youtube.com/watch?v=fo_tJXyuLR4"
                className="card-link background-white"
                target="_blank"
              >
                <img src={youtube} className="project-links youtube"/>
              </a>
              <a
                href="https://github.com/amiefoster/jokester"
                className="card-link background-white"
                target="_blank"
              >
                <img src={github} className="project-links"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
