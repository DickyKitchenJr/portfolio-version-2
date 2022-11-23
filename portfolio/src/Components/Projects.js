import React, { useState } from "react";
import ProjectContents from "./ProjectContents";
import "./Projects.css";

function Projects() {
    const [prevDisabled, setPrevDisabled] = useState();
    const [nextDisabled, setNextDisabled] = useState();

    // TODO: map through array of project data

  return (
    <>
      <div className="projectsTitle">
        <h2>Projects</h2>
        <button className="previous">Prior</button>
        <button className="next">Next</button>
      </div>
      <ProjectContents />
    </>
  );
}

export default Projects;
