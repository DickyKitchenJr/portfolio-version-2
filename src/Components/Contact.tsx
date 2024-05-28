import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  styling: string;
}

function Contact({ styling }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    setName(input);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    setEmail(input);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let input = e.target.value;

    setMessage(input);
  };

  const handleHoneyChange = () => {
    setHoney(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current){
      emailjs
      .sendForm("contact_service", "template_18nwxbn", form.current, {
        publicKey: "iX7305v5_CCdTLK2r",
      })
      .then(
        () => {
          alert("Message Sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert(`Message failed. Error: ${error}`);
          console.log(error);
        }
      );
    }
  };

  return (
    <>
      <div className={`${styling}-contactTitle`}>
        <h2>Contact Me</h2>
      </div>
      <div className={`${styling}-contactBackground`}>
        <div className={`${styling}-contact`}>
          <form onSubmit={handleSubmit} ref={form}>
            <p>Have a job or a question for me?</p>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              onChange={handleNameChange}
              value={name}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              onChange={handleEmailChange}
              value={email}
              required
            />
            <input type="checkbox" checked={honey} onChange={handleHoneyChange} name="_honey" style={{ display: "none" }} />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
              cols={30}
              onChange={handleMessageChange}
              value={message}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
