import Projects from "./Components/Projects";
import Header from "./Components/Header";
import TLDR from "./Components/TLDR";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./Styles/app.css";

function App() {
  return (
    <>
      <Header />
      <TLDR />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
