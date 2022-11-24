import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const GitHub = <FontAwesomeIcon icon={faGithub} />;
const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />
const Instagram = <FontAwesomeIcon icon={faInstagram} />

function Footer() {
  return (
    <h4 className="footer">
      Find me on &nbsp;&nbsp;
      <a
        href="https://github.com/DickyKitchenJr"
        target="_blank"
        rel="noreferrer"
      >
        {GitHub} GitHub
      </a>
      ,&nbsp;&nbsp;
      <a
        href="https://www.linkedin.com/in/dicky-kitchen-jr-89727b240/"
        target="_blank"
        rel="noreferrer"
      >
        {LinkedIn} LinkedIn
      </a>
      , and &nbsp;
      <a
        href="https://www.instagram.com/oldguylearnscoding/"
        target="_blank"
        rel="noreferrer"
      >
        {Instagram} Instagram
      </a>
    </h4>
  );
}

export default Footer
