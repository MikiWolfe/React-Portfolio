import React from "react";
import ContactForm from "./ContactForm";
import {
  RiTwitterFill,
  RiInstagramLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import "../../styles/style.css";
export default function Contact() {
  return (
    <div>
      <ContactForm />
      <div className="contactFooter">
        <h3 className="contactHeader"> You can also find me on:</h3>
        <h1 className="contactIcon">
          <a className="" href="https://twitter.com/MikiiWolf" target="_blank">
            {<RiTwitterFill />}
          </a>
          <a href="https://github.com/MikiWolfe" target="_blank">
            {<RiGithubFill />}
          </a>

          <a
            href="https://www.linkedin.com/in/mikayla-bruce-b50676221/"
            target="_blank"
          >
            {<RiLinkedinBoxFill />}
          </a>
          <a href="https://www.instagram.com/mikiwolfe/?hl=en" target="_blank">
            {<RiInstagramLine />}
          </a>
        </h1>
      </div>
    </div>
  );
}
