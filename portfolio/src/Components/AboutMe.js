import React, { useEffect, useState } from "react";
import meCentered from "../Images/meCenteredBW.webp";
import meWide from "../Images/meWideBW.webp";

function AboutMe({styling}) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [picture, setPicture] = useState();

  const detectWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);
    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, [windowSize]);

  useEffect(() => {
    const backgroundImage = () => {
      if (windowSize.width <= 1020) {
        setPicture(meCentered);
      } else {
        setPicture(meWide);
      }
    };

    window.addEventListener("resize", backgroundImage());
    return () => {
      window.removeEventListener("resize", backgroundImage());
    };
  }, [windowSize]);

  return (
    <>
      <div className={`${styling}-aboutMeTitle`}>
        <h2>About Me</h2>
      </div>
      <div
        className={`${styling}-aboutMe`}
        style={
          styling === "default" ? { backgroundImage: `url(${picture})` } : null
        }
      >
        <p className={`${styling}-aboutMeContent`}>
          As a front-end developer, I bring a unique perspective to my work that
          is informed by my experience as a Physical Therapist Assistant. Over
          my 13-year career in healthcare, I developed valuable skills in clear
          communication, attention to detail, and a commitment to providing
          high-quality care. These skills have translated seamlessly into my
          coding career, where I'm dedicated to creating websites and
          applications that make a positive impact on people's lives.
          <br />
          <br />
          With a solid foundation in HTML, CSS, JavaScript, and React, I'm able
          to approach every project with a sense of curiosity and excitement,
          just as I approached every patient with a desire to help them achieve
          their goals. In addition to my technical skills, I bring a range of
          soft skills to my work, including effective verbal and written
          communication, a team-oriented mindset, problem-solving ability,
          creativity, and adaptability. I'm always eager to learn and improve,
          and I value constructive feedback as an opportunity to grow and
          develop my skills further.
          <br />
          <br />
          Whether I'm working independently or collaborating with a team, I
          approach every project with an open-minded, teachable attitude and a
          commitment to delivering results that exceed expectations. I'm excited
          about the opportunity to leverage my skills and experience to make a
          positive impact in the front-end development space and to contribute
          to innovative, user-centered solutions for clients and users alike.
          <br />
          <br />
          (if you are interested in seeing a list of certificates I have earned,
          you can click{" "}
          <a
            className={`${styling}-link`}
            href="https://certificates.dickykitchen.com/"
          >
            here
          </a>
          )
        </p>
      </div>
    </>
  );
}

export default AboutMe;
