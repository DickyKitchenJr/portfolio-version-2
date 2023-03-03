import React, { useState } from "react";
import "../Components/Skills.css";
import VSCode from "../Images/VSCode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function NewSkills() {
  const [hardSkillsHidden, setHardSkillsHidden] = useState(0);
  const [softSkillsHidden, setSoftSkillsHidden] = useState(1);

  const hardHide = () => {
    setHardSkillsHidden(1);
    setSoftSkillsHidden(0);
  };

  const softHide = () => {
    setSoftSkillsHidden(1);
    setHardSkillsHidden(0);
  };

  const hardHandleClick = () => {
    if (hardSkillsHidden === 1) {
      softHide();
    }
  };

  const softHandleClick = () => {
    if (softSkillsHidden === 1) {
      hardHide();
    }
  };

  return (
    <>
      <div className="hero">
        <p className="banner">Coding Makes Me Happy</p>
      </div>
      <div className="skillsTitle">
        <h2>Skills</h2>
        <button className="hardbutton" onClick={() => hardHandleClick()}>
          Hard Skills
        </button>
        <button className="softbutton" onClick={() => softHandleClick()}>
          Soft Skills
        </button>
      </div>
      <div className="skills">
        <div className="hardskills" visibility={hardSkillsHidden}>
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
        <div className="softskills" visibility={softSkillsHidden}>
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
      </div>
    </>
  );
}

export default NewSkills;
