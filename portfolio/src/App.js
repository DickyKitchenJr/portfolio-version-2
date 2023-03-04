import React, { useState } from "react";
import { Parallax } from "react-parallax";
import code from "./Images/codeBackground.webp";
import NewProjects from "./NewComponents/NewProjects";
import NewHeader from "./NewComponents/NewHeader";
import NewAboutMe from "./NewComponents/NewAboutMe";
import NewSkills from "./NewComponents/NewSkills";
import NewContact from "./NewComponents/NewContact";
import NewFooter from "./NewComponents/NewFooter";
import './Styles/default.css';

// TODO: set up styling for each page using seperate css files for each ; After styling is complete erase unused files and remove the 'New' from the naming of each file along with verifying that all imports and references point to the appropriate components/files

function App() {
  const [styling, setStyling] = useState("default");

  const defaultClick = () => {
    setStyling("default");
  };

  const bonesLightClick = () => {
    setStyling("bonesLight");
  };

  const bonesDarkClick = () => {
    setStyling("bonesDark");
  };

  const modernLightClick = () => {
    setStyling("modernLight");
  };

  const modernDarkClick = () => {
    setStyling("modernDark");
  };

  return (
    <>
      {styling === "default" ? (
        <>
          <Parallax
            blur={0}
            bgImage={code}
            bgImageAlt="various lines of code"
            contentClassName="main"
            strength={600}
          >
            <NewHeader styling={styling} />
            <div className={`${styling}-style`}>
              <h2>Choose A Style</h2>
              <nav>
                <p onClick={defaultClick}>Creator's Pick (default)</p>
                <p>
                  8-Bit Bones <span onClick={bonesLightClick}>Light</span>{" "}
                  <span onClick={bonesDarkClick}>Dark</span>
                </p>
                <p>
                  Modern Minimalist{" "}
                  <span onClick={modernLightClick}>Light</span>{" "}
                  <span onClick={modernDarkClick}>Dark</span>
                </p>
              </nav>
            </div>
            <NewSkills styling={styling} />
            <NewAboutMe styling={styling} />
            <NewProjects styling={styling} />
            <NewContact styling={styling} />
            <NewFooter styling={styling} />
          </Parallax>
        </>
      ) : (
        <>
          <NewHeader styling={styling} />
          <div className={`${styling}-style`}>
            <h2>Choose A Style</h2>
            <nav>
              <p onClick={defaultClick}>Creator's Pick (default)</p>
              <p>
                8-Bit Bones <span onClick={bonesLightClick}>Light</span>{" "}
                <span onClick={bonesDarkClick}>Dark</span>
              </p>
              <p>
                Modern Minimalist <span onClick={modernLightClick}>Light</span>{" "}
                <span onClick={modernDarkClick}>Dark</span>
              </p>
            </nav>
          </div>
          <NewSkills styling={styling} />
          <NewAboutMe styling={styling} />
          <NewProjects styling={styling} />
          <NewContact styling={styling} />
          <NewFooter styling={styling} />
        </>
      )}
    </>
  );
}

export default App;
