import React, { useState } from "react";
import {  RiStarFill, RiMailSendFill } from "react-icons/ri";

import "../../styles/style.css";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="thank-you"> <RiStarFill/>  Thank you!</div>
      </>
    );
  }
  return (
    <form className="contact-form"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
     
    >
      <h2 className=""> Want to get in touch? Send me message:</h2>

<div > 
<div> </div>
      <div className="input">
      <label for="fname"> Name: </label>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className=""
          required
        />
      </div>

      <div className="input">
      <label for="email"> Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=""
          required
        />
      </div>
      <label for="message"> Your Message: </label>
      <div>
        <textarea 
        placeholder="Message"
        name ="message"
        className=""
        required
        />
      </div>

      <button className= "subbtn" type="submit"> <RiMailSendFill/> Send</button>
      
</div>
    </form>



  );
};


export default ContactForm
