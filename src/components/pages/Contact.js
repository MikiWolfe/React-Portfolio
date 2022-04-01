import React, { useState } from "react";
import { RiTwitterFill, RiStarFill, RiInstagramLine, RiGithubFill, RiLinkedinBoxFill ,RiMailSendFill } from "react-icons/ri";

import "../../styles/style.css";

const FORM_ENDPOINT = "";

const Contact = () => {
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
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
     
    >
      <h1 className=""> Want to get in touch? Send me message:</h1>

<div  className="contact-form"> 
      <div className="input">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className=""
          required
        />
      </div>

      <div className="input">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=""
          required
        />
      </div>
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


export default Contact
