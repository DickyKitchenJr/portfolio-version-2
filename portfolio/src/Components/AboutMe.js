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
      <div className={`${styling}-aboutMe`} style={styling === 'default' ? { backgroundImage: `url(${picture})` } : null}>
        <p className={`${styling}-aboutMeContent`}>
          I'm a front end developer with the goal of concise, clean coding with
          user accessibility in mind.
          <br />
          <br />
          I started learning to code in 2019 with a Python Course on
          CodeCademy.com, and while I changed direction to front-end coding,
          those first lessons helped kick-start my interest in coding and the
          decision to build towards a career as a developer.
          <br />
          <br />
          Since then, I have used a variety of online resources to expand my
          knowledge and skill set, all with a focus on building projects as I
          grow.
          <br />
          <br />
          At first, I did most of my coding on the CodeCademy platform, but
          recently I have performed more coding in my GitHub repositories to
          better let others see my activity and growth. <br />
          <br />
          Moving forward, my goal is to find a company I can grow at and a team
          that creates great things. <br />
          <br />
          Whether I am creating a website, making an app, writing a new book, or
          building something with my hands, I approach every problem the same
          way; with a sense of curiosity and an excitement for the finished
          product.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
