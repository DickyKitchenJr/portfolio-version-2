import { Parallax } from "react-parallax";
import code from "./Images/codeBackground.jpg";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
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
        <Projects />
      </Parallax>
    </>
  );
}

export default App;
