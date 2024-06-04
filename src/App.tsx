import { useState } from "react";
import { Parallax } from "react-parallax";
import code from "./Images/codeBackground.webp";
import Projects from "./Components/Projects";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./Styles/Default.css";


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
            <Header styling={styling} />
            <div className={`${styling}-style`}>
              <h2>Choose A Style</h2>
              <nav>
                <p onClick={defaultClick}>
                  Creator's Pick
                  <br />(<span>default</span>)
                </p>
                <p>
                  8-Bit Bones
                  <br />(<span onClick={bonesLightClick}>Light</span> /{" "}
                  <span onClick={bonesDarkClick}>Dark</span>)
                </p>
                <p>
                  Modern Minimalist
                  <br /> (<span onClick={modernLightClick}>Light</span> /{" "}
                  <span onClick={modernDarkClick}>Dark</span>)
                </p>
              </nav>
            </div>
            <Skills styling={styling} />
            <AboutMe styling={styling} />
            <Projects styling={styling} />
            <Contact styling={styling} />
            <Footer styling={styling} />
          </Parallax>
        </>
      ) : (
        <>
        <div className={`${styling}`}>
          <Header styling={styling} />
          <div className={`${styling}-style`}>
            <h2>Choose A Style</h2>
            <nav>
              <p onClick={defaultClick}>
                Creator's Pick
                <br />(<span>default</span>)
              </p>
              <p>
                8-Bit Bones
                <br />(<span onClick={bonesLightClick}>Light</span> /{" "}
                <span onClick={bonesDarkClick}>Dark</span>)
              </p>
              <p>
                Modern Minimalist
                <br /> (<span onClick={modernLightClick}>Light</span> /{" "}
                <span onClick={modernDarkClick}>Dark</span>)
              </p>
            </nav>
          </div>
          <Skills styling={styling} />
          <AboutMe styling={styling} />
          <Projects styling={styling} />
          <Contact styling={styling} />
          <Footer styling={styling} />
        </div>
        </>
      )}
    </>
  );
}

export default App;
