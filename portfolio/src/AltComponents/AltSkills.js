import React, { useState } from 'react';
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
const GitHub = <FontAwesomeIcon icon={faGithub} className="altGithubIcon icon" />;
const WordPress = (
  <FontAwesomeIcon icon={faWordpress} className="wordpressIcon icon" />
);

function AltSkills() {
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
      <div className="altSkillsTitle">
        <h2>Skills</h2>
        <button className="altHardbutton" onClick={() => hardHandleClick()}>
          Hard Skills
        </button>
        <button className="altSoftbutton" onClick={() => softHandleClick()}>
          Soft Skills
        </button>
      </div>
      <div className="altSkills">
        <div className="altHardskills" visibility={hardSkillsHidden}>
          <h2 className="altSkillsh2">Hard Skills</h2>
          <div className="altSkillsblock">
            <figure className="altSkillIcon html">
              {HTML}
              <figcaption className="altIconCaption">HTML</figcaption>
            </figure>
            <figure className="altSkillIcon css">
              {CSS}
              <figcaption className="altIconCaption">CSS</figcaption>
            </figure>
            <figure className="altSkillIcon javascript">
              {JavaScript}
              <figcaption className="altIconCaption">JavaScript</figcaption>
            </figure>
            <figure className="altSkillIcon react">
              {react}
              <figcaption className="altIconCaption">React</figcaption>
            </figure>
            <figure className="altSkillIcon github">
              {GitHub}
              <figcaption className="altIconCaption">GitHub</figcaption>
            </figure>
            <figure className="altSkillIcon vscode">
              <img src={VSCode} alt="VS Code icon" className="altVscodeIcon" />
              <figcaption className="altIconCaption">VS Code</figcaption>
            </figure>
            <figure className="altSkillIcon wordpress">
              {WordPress}
              <figcaption className="altIconCaption">WordPress</figcaption>
            </figure>
          </div>
        </div>
        <div className="altSoftskills" visibility={softSkillsHidden}>
          <h2 className="altSkillsh2">Soft Skills</h2>
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

export default AltSkills
