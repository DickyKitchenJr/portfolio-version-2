import React, { useState } from "react";
import VSCode from "../Images/VSCode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

function NewSkills({ styling }) {
  const [hardSkillsHidden, setHardSkillsHidden] = useState(0);
  const [softSkillsHidden, setSoftSkillsHidden] = useState(1);

  // Hard Skill Icons
  const HTML = (
    <FontAwesomeIcon icon={faHtml5} className={`${styling}-htmlIcon ${styling}-icon`} />
  );
  const CSS = (
    <FontAwesomeIcon
      icon={faCss3Alt}
      className={`${styling}-cssIcon ${styling}-icon`}
    />
  );
  const JavaScript = (
    <FontAwesomeIcon
      icon={faSquareJs}
      className={`${styling}-javascriptIcon ${styling}-icon`}
    />
  );
  const react = (
    <FontAwesomeIcon
      icon={faReact}
      className={`${styling}-reactIcon ${styling}-icon`}
    />
  );
  const GitHub = (
    <FontAwesomeIcon
      icon={faGithub}
      className={`${styling}-githubIcon ${styling}-icon`}
    />
  );
  const WordPress = (
    <FontAwesomeIcon
      icon={faWordpress}
      className={`${styling}-wordpressIcon ${styling}-icon`}
    />
  );

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
      <div className={`${styling}-hero`}>
        <p className={`${styling}-banner`}>Coding Makes Me Happy</p>
      </div>
      <div className={`${styling}-skillsTitle`}>
        <h2>Skills</h2>
        <button
          className={`${styling}-hardbutton`}
          onClick={() => hardHandleClick()}
        >
          Hard Skills
        </button>
        <button
          className={`${styling}-softbutton`}
          onClick={() => softHandleClick()}
        >
          Soft Skills
        </button>
      </div>
      <div className={`${styling}-skills`}>
        <div className={`${styling}-hardskills`} visibility={hardSkillsHidden}>
          <h2 className={`${styling}-skillsh2`}>Hard Skills</h2>
          <div className={`${styling}-skillsblock`}>
            <figure className={`${styling}-skillIcon html`}>
              {HTML}
              <figcaption className={`${styling}-iconCaption`}>HTML</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon css`}>
              {CSS}
              <figcaption className={`${styling}-iconCaption`}>CSS</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon javascript`}>
              {JavaScript}
              <figcaption className={`${styling}-iconCaption`}>JavaScript</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon react`}>
              {react}
              <figcaption className={`${styling}-iconCaption`}>React</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon github`}>
              {GitHub}
              <figcaption className={`${styling}-iconCaption`}>GitHub</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon vscode`}>
              <img src={VSCode} alt="VS Code icon" className={`${styling}-vscodeIcon`} />
              <figcaption className={`${styling}-iconCaption`}>VS Code</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon wordpress`}>
              {WordPress}
              <figcaption className={`${styling}-iconCaption`}>WordPress</figcaption>
            </figure>
          </div>
        </div>
        <div className={`${styling}-softskills`} visibility={softSkillsHidden}>
          <h2 className={`${styling}-skillsh2`}>Soft Skills</h2>
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