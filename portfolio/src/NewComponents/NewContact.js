import React from "react";
import "../Components/Contact.css";

function NewContact() {
  return (
    <>
      <div className="contactTitle">
        <h2>Contact Me</h2>
      </div>
      <div className="contactBackground">
        <div className="contact">
          <form
            action="https://formsubmit.co/dkitchencodes@gmail.com"
            method="POST"
          >
            <p>Have a job or a question for me?</p>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="10"
              cols="30"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewContact;
