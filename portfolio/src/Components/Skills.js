import React from "react";
import { Parallax } from "react-parallax";
import "./Skills.css";
import keyboard from "../Images/keyboard.jpg";
import VSCode from "../Images/VSCode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

const HTML = <FontAwesomeIcon icon={faHtml5} className="htmlIcon icon" />;
const CSS = <FontAwesomeIcon icon={faCss3Alt} className="cssIcon icon" />;
const JavaScript = (
  <FontAwesomeIcon icon={faSquareJs} className="javascriptIcon icon" />
);
const react = <FontAwesomeIcon icon={faReact} className="reactIcon icon" />;
const GitHub = <FontAwesomeIcon icon={faGithub} className="githubIcon icon" />;
const WordPress = (
  <FontAwesomeIcon icon={faWordpress} className="wordpressIcon icon" />
);

function Skills() {
  return (
    <>
      <Parallax
        blur={0}
        bgImage={keyboard}
        bgImageAlt="various lines of code"
        contentClassName="skills"
        strength={600}
      >
        <div className="hardskills" style={{visibility: "hidden"}}>
          <h2 className="skillsh2">Hard Skills</h2>
          <div className="skillsblock">
            <figure className="skillIcon html">
              {HTML}
              <figcaption className="iconCaption">HTML</figcaption>
            </figure>
            <figure className="skillIcon css">
              {CSS}
              <figcaption className="iconCaption">CSS</figcaption>
            </figure>
            <figure className="skillIcon javascript">
              {JavaScript}
              <figcaption className="iconCaption">JavaScript</figcaption>
            </figure>
            <figure className="skillIcon react">
              {react}
              <figcaption className="iconCaption">React</figcaption>
            </figure>
            <figure className="skillIcon github">
              {GitHub}
              <figcaption className="iconCaption">GitHub</figcaption>
            </figure>
            <figure className="skillIcon vscode">
              <img src={VSCode} alt="VS Code icon" className="vscodeIcon" />
              <figcaption className="iconCaption">VS Code</figcaption>
            </figure>
            <figure className="skillIcon wordpress">
              {WordPress}
              <figcaption className="iconCaption">WordPress</figcaption>
            </figure>
          </div>
        </div>
        <div className="softskills">
          <h2 className="skillsh2">Soft Skills</h2>
          <p>Verbal Communication</p>
          <p>Written Communication</p>
          <p>Team-oriented</p>
          <p>Problem-solving</p>
          <p>Creativity</p>
          <p>Adaptability</p>
          <p>Teachable</p>
          <p>Open-minded</p>
          <p>Able to receive and apply constructive criticism</p>
        </div>
      </Parallax>
    </>
  );
}

export default Skills;
