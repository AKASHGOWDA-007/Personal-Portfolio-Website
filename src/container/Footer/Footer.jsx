import React from "react";
import { AppWrap } from "../../wrapper";
import "./Footer.scss";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_pn1pc4s', 'template_hfgwovc', form.current, 'Ylf4wB69Hf9csD8os')
        .then((result) => {
          console.log(result.text);
          console.log("message sent")
        }, (error) => {
          console.log(error.text);
        });
    };

    return (
      <>
        <h2 className="head-text">
          <span>Send me a message!</span>
        </h2>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
          <div>
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="user_name" required />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your email" name="user_email" required />
            </div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <input type="submit" value="send message" className="p-text send" ></input>
        </form>
      </>
    );
  }

  export default AppWrap(Footer, "contact");
