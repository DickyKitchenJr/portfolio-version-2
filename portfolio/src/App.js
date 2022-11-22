import { Parallax } from "react-parallax";
import code from "./Images/codeBackground.jpg";
import codeBW from "./Images/codeBackgroundBW.webp";
import codeHCBW from "./Images/codeBackgroundHighContrastBW.webp";
import codeInverseBW from "./Images/codeBackgroundInverseBW.webp";
import codeSepia from "./Images/codeBackgroundSepia.webp";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import "./App.css";

function App() {
  return (
    <>
      <Parallax
        blur={0}
        bgImage={code}
        bgImageAlt="various lines of code"
        contentClassName="main"
        strength={600}
      >
        <Header />
        <Skills />
        <AboutMe />
      </Parallax>
    </>
  );
}

export default App;
