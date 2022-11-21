import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  return (
    <>
      <h1 className="banner">DK's Portfolio</h1>
        <div className="hero">
          <p className="banner">Coding Makes Me Happy</p>
        </div>
    </>
  );
}

export default Header;
