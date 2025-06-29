import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  styling: string;
}

function Footer({ styling }: FooterProps) {
  const GitHub = (
    <FontAwesomeIcon icon={faGithub} className={`${styling}-footerIcon`} />
  );
  const LinkedIn = (
    <FontAwesomeIcon icon={faLinkedin} className={`${styling}-footerIcon`} />
  );
  const Instagram = (
    <FontAwesomeIcon icon={faInstagram} className={`${styling}-footerIcon`} />
  );

  return (
    <p className={`${styling}-footer`}>
      Find me on &nbsp;&nbsp;
      <a
        href="https://github.com/DickyKitchenJr"
        target="_blank"
        rel="noreferrer"
      >
        {GitHub} GitHub
      </a>
      &nbsp;and &nbsp;&nbsp;
      <a
        href="https://www.linkedin.com/in/dicky-kitchen-jr-89727b240/"
        target="_blank"
        rel="noreferrer"
      >
        {LinkedIn} LinkedIn
      </a>
    </p>
  );
}

export default Footer;
