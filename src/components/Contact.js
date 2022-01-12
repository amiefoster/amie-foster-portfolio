function Contact() {
  return (
    <div id="contact" className="row contact-container">
      <div className="contact-title">
        <h1 className="background-none ">Let's get in touch!</h1>
      </div>
      <div className="col-md-6 contact-container ">
        <form>



          {/* ERASE THIS TO MAKE FORM WORK \/\/\/ */}
          <fieldset disabled className="background-none">



            <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="name "
                placeholder="Name"
              />
              <label for="name" className="background-none">
                Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
              />
              <label for="email" className="background-none">
                Email
              </label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                type="text"
                className="form-control"
                id="message"
                placeholder="Type message here!"
                style={{ height: "150px" }}
              />
              <label for="message" className="background-none">
                Message
              </label>
            </div>

            <button type="button" class="btn btn-dark">
              Send
            </button>



          </fieldset>


          
        </form>
      </div>
    </div>
  );
}

export default Contact;
