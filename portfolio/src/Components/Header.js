import React from "react";
import { Parallax } from "react-parallax";
import me from "../Images/me.jpeg";
import "./Header.css";

function Header() {
  return (
    <>
    <Parallax
        blur={0}
        bgImage={me}
        bgImageAlt="DK at his desk"
        contentClassName="herobanner"
        strength={600}
      ><div className="hero">
        <h1 className="banner">DK's Portfolio</h1>
        <p className="banner">Coding Makes Me Happy</p>
      </div></Parallax>
      
    </>
  );
}

export default Header;
