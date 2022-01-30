import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();    

    emailjs.sendForm('service_r0rmwmg', 'template_u91z2cs', form.current, 'user_fPg52oeLyMffo5sbNj50i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="row contact-container">

      <div className="contact-title">
        <h1 className="background-none ">Let's get in touch!</h1>
      </div>
      <div className="col-md-6 contact-container ">
        <form ref={form} onSubmit={sendEmail}>

            <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control"
                id="name "
                name="name"
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
                name="email"
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
                name="message"
                placeholder="Type message here!"
                style={{ height: "150px" }}
              />
              <label for="message" className="background-none">
                Message
              </label>
            </div>

            <input type="submit" value="Send" class="btn btn-dark" />
          
        </form>
      </div>
    </div>
  );
}

export default Contact;
