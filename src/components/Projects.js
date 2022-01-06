import pic from "../images/amie.JPG";

function Project() {
  return (
    <div className="container ">
      <div className="row project-title">
        <div className="col-md-6">
          <h1>Projects</h1>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-12 project-container justify-content-center">
          <div className="card project-card" style={{ width: "25rem" }}>
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body background-white">
              <h5 className="card-title background-white">Planz</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">Card subtitle</h6>
              <p className="card-text background-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="https://www.youtube.com/watch?v=OpcAtDManjA&feature=youtu.be" className="card-link background-white" target="_blank">
                Demo
              </a>
              <a href="https://github.com/amiefoster/bash" className="card-link background-white" target="_blank">
                Github Repo
              </a>
            </div>
          </div>

          <div className="card project-card" style={{ width: "25rem" }}>
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body background-white">
              <h5 className="card-title background-white">Wander</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">Card subtitle</h6>
              <p className="card-text background-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="https://www.youtube.com/watch?v=adgPPzfKjs4&feature=youtu.be" className="card-link background-white" target="_blank">
                Demo
              </a>
              <a href="https://github.com/amiefoster/wander" className="card-link background-white" target="_blank">
                Github Repo
              </a>
            </div>
          </div>

          <div className="card project-card" style={{ width: "25rem" }}>
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body background-white">
              <h5 className="card-title background-white">Dander</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">Card subtitle</h6>
              <p className="card-text background-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="https://www.youtube.com/watch?v=oGnj3lPhW7U&feature=youtu.be" className="card-link background-white" target="_blank">
                Demo
              </a>
              <a href="https://github.com/amiefoster/pet-tinder-frontend" className="card-link background-white" target="_blank">
                Github Repo
              </a>
            </div>
          </div>

          <div className="card project-card" style={{ width: "25rem" }}>
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body background-white">
              <h5 className="card-title background-white">Jokester</h5>
              <h6 className="card-subtitle mb-2 text-muted background-white">Card subtitle</h6>
              <p className="card-text background-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="https://www.youtube.com/watch?v=fo_tJXyuLR4" className="card-link background-white" target="_blank">
                Demo
              </a>
              <a href="https://github.com/amiefoster/jokester" className="card-link background-white" target="_blank" >
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
