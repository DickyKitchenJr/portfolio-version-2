import { useState } from "react";
import VSCode from "../Images/VSCode.webp";
import Jest from "../Images/jest.webp";
import Nextjs from "../Images/nextjs.webp";
import Vite from "../Images/vite.webp";
import Express from "../Images/express.webp";
import Mysql from "../Images/mysql.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faYarn } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const [hardSkillsHidden, setHardSkillsHidden] = useState(0);
  const [softSkillsHidden, setSoftSkillsHidden] = useState(1);

  // Hard Skill Icons
  const HTML = (
    <FontAwesomeIcon
      icon={faHtml5}
      className="htmlIcon icon"
    />
  );
  const CSS = (
    <FontAwesomeIcon
      icon={faCss3Alt}
      className="cssIcon icon"
    />
  );
  const JavaScript = (
    <FontAwesomeIcon
      icon={faSquareJs}
      className="javascriptIcon icon"
    />
  );
  const react = (
    <FontAwesomeIcon
      icon={faReact}
      className="reactIcon icon"
    />
  );
  const GitHub = (
    <FontAwesomeIcon
      icon={faGithub}
      className="githubIcon icon"
    />
  );
  const WordPress = (
    <FontAwesomeIcon
      icon={faWordpress}
      className="wordpressIcon icon"
    />
  );
  const Yarn = (
    <FontAwesomeIcon
      icon={faYarn}
      className="yarnIcon icon"
    />
  );
  const npm = (
    <FontAwesomeIcon
      icon={faNpm}
      className="npmIcon icon"
    />
  );
  const node = (
    <FontAwesomeIcon
      icon={faNodeJs}
      className="nodeIcon icon"
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
      {/* <div className="hero">
        <p className="banner">Coding Makes Me Happy</p>
      </div> */}
      <div className="skillsTitle">
        <h2>Skills</h2>
        <button
          className="hardbutton"
          onClick={() => hardHandleClick()}
          data-showing={hardSkillsHidden}
        >
          ◄ Hard Skills
        </button>
        <button
          className="softbutton"
          onClick={() => softHandleClick()}
          data-showing={softSkillsHidden}
        >
          Soft Skills ►
        </button>
      </div>
      <div className="skills">
        <div className="hardskills" data-visibility={hardSkillsHidden}>
          <h2 className="skillsh2">Hard Skills</h2>
          <div className="skillsblock">
            <figure className="skillIcon">
              {HTML}
              <figcaption className="iconCaption">HTML</figcaption>
            </figure>
            <figure className="skillIcon">
              {CSS}
              <figcaption className="iconCaption">CSS</figcaption>
            </figure>
            <figure className="skillIcon">
              {JavaScript}
              <figcaption className="iconCaption">
                JavaScript
              </figcaption>
            </figure>
            <figure className="skillIcon">
              {react}
              <figcaption className="iconCaption">
                React
              </figcaption>
            </figure>
            <figure className="skillIcon">
              {GitHub}
              <figcaption className="iconCaption">
                GitHub
              </figcaption>
            </figure>
            <figure className="skillIcon">
              <img
                src={VSCode}
                alt="VS Code icon"
                className="vscodeIcon"
              />
              <figcaption className="iconCaption">
                VS Code
              </figcaption>
            </figure>
            <figure className="skillIcon">
              {WordPress}
              <figcaption className="iconCaption">
                WordPress
              </figcaption>
            </figure>
            <figure className="skillIcon">
              {Yarn}
              <figcaption className="iconCaption">Yarn</figcaption>
            </figure>
            <figure className="skillIcon">
              <img
                src={Jest}
                alt="jest icon"
                className="vscodeIcon"
              />
              <figcaption className="iconCaption">Jest</figcaption>
            </figure>
            <figure className="skillIcon">
              <img
                src={Nextjs}
                alt="nextjs icon"
                className="vscodeIcon"
              />
              <figcaption className="iconCaption">
                Next.js
              </figcaption>
            </figure>
            <figure className="skillIcon">
              {npm}
              <figcaption className="iconCaption">NPM</figcaption>
            </figure>
            <figure className="skillIcon">
              <img
                src={Vite}
                alt="vite icon"
                className="vscodeIcon"
              />
              <figcaption className="iconCaption">Vite</figcaption>
            </figure>
            <figure className="skillIcon">
              {node}
              <figcaption className="iconCaption">Node</figcaption>
            </figure>
            <figure className="skillIcon">
              <img
                src={Express}
                alt="expressjs icon"
                className="vscodeIcon"
              />
              <figcaption className="iconCaption">
                Express.js
              </figcaption>
            </figure>
            <figure className="skillIcon">
              <img
                src={Mysql}
                alt="mysql icon"
                className="vscodeIcon"
              />
              <figcaption className="iconCaption">
                MySQL
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="softskills" data-visibility={softSkillsHidden}>
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

export default Skills;
