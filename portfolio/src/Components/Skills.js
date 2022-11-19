import React from 'react'
import { Parallax } from "react-parallax";
import './Skills.css'
import { code } from '../Images/codeBackground.jpg'

function Skills() {
  return (
    <>
    <Parallax
    blur={1}
    bgImage={code}
    bgImageAlt="various lines of code"
    contentClassName='skills'
    strength={200}
  >
    Content goes here. Parallax height grows with content height.
  </Parallax>
    </>
  )
}

export default Skills



const Container = () => (
  
);