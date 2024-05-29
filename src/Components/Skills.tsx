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

interface SkillsProps {
  styling: string;
}

function Skills({ styling }: SkillsProps) {
  const [hardSkillsHidden, setHardSkillsHidden] = useState(0);
  const [softSkillsHidden, setSoftSkillsHidden] = useState(1);

  // Hard Skill Icons
  const HTML = (
    <FontAwesomeIcon
      icon={faHtml5}
      className={`${styling}-htmlIcon ${styling}-icon`}
    />
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
  const Yarn = (
    <FontAwesomeIcon
      icon={faYarn}
      className={`${styling}-yarnIcon ${styling}-icon`}
    />
  );
  const npm = (
    <FontAwesomeIcon
      icon={faNpm}
      className={`${styling}-npmIcon ${styling}-icon`}
    />
  );
  const node = (
    <FontAwesomeIcon
      icon={faNodeJs}
      className={`${styling}-nodeIcon ${styling}-icon`}
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
          data-showing={hardSkillsHidden}
        >
          {styling === "modernLight" || styling === "modernDark" ? (
            <span>◄</span>
          ) : null}
          Hard Skills
        </button>
        <button
          className={`${styling}-softbutton`}
          onClick={() => softHandleClick()}
          data-showing={softSkillsHidden}
        >
          Soft Skills
          {styling === "modernLight" || styling === "modernDark" ? (
            <span>►</span>
          ) : null}
        </button>
      </div>
      <div className={`${styling}-skills`}>
        <div className={`${styling}-hardskills`} data-visibility={hardSkillsHidden}>
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
              <figcaption className={`${styling}-iconCaption`}>
                JavaScript
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon react`}>
              {react}
              <figcaption className={`${styling}-iconCaption`}>
                React
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon github`}>
              {GitHub}
              <figcaption className={`${styling}-iconCaption`}>
                GitHub
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon vscode`}>
              <img
                src={VSCode}
                alt="VS Code icon"
                className={`${styling}-vscodeIcon`}
              />
              <figcaption className={`${styling}-iconCaption`}>
                VS Code
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon wordpress`}>
              {WordPress}
              <figcaption className={`${styling}-iconCaption`}>
                WordPress
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon yarn`}>
              {Yarn}
              <figcaption className={`${styling}-iconCaption`}>Yarn</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon jest`}>
              <img
                src={Jest}
                alt="jest icon"
                className={`${styling}-vscodeIcon`}
              />
              <figcaption className={`${styling}-iconCaption`}>Jest</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon nextjs`}>
              <img
                src={Nextjs}
                alt="nextjs icon"
                className={`${styling}-vscodeIcon`}
              />
              <figcaption className={`${styling}-iconCaption`}>
                Next.js
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon npm`}>
              {npm}
              <figcaption className={`${styling}-iconCaption`}>NPM</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon jest`}>
              <img
                src={Vite}
                alt="vite icon"
                className={`${styling}-vscodeIcon`}
              />
              <figcaption className={`${styling}-iconCaption`}>Vite</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon node`}>
              {node}
              <figcaption className={`${styling}-iconCaption`}>Node</figcaption>
            </figure>
            <figure className={`${styling}-skillIcon expressjs`}>
              <img
                src={Express}
                alt="expressjs icon"
                className={`${styling}-vscodeIcon`}
              />
              <figcaption className={`${styling}-iconCaption`}>
                Express.js
              </figcaption>
            </figure>
            <figure className={`${styling}-skillIcon mysql`}>
              <img
                src={Mysql}
                alt="mysql icon"
                className={`${styling}-vscodeIcon`}
              />
              <figcaption className={`${styling}-iconCaption`}>
                MySQL
              </figcaption>
            </figure>
          </div>
        </div>
        <div className={`${styling}-softskills`} data-visibility={softSkillsHidden}>
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

export default Skills;
