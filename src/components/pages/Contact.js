import React from "react";
import "../../styles/style.css";

export default function Contact() {
  return (
    <form
      id="contact-form"
      onSubmit={this.handleSubmit.bind(this)}
      method="POST"
    >
      <h1 className="example">Contact Me:</h1>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
      );
    }



