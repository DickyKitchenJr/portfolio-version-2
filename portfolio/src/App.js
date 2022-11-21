import { Parallax } from 'react-parallax';
import code from './Images/codeBackground.jpg'
import Header from './Components/Header';
import Skills from './Components/Skills';
import './App.css';

function App() {
  return (
    <>
    <Parallax
        blur={2}
        bgImage={code}
        bgImageAlt="various lines of code"
        contentClassName="main"
        strength={600}
      ><Header />
    <Skills /></Parallax>
    
    </>
  );
}

export default App;
