import React, { useState } from "react";
import { ProjectEntries } from "./ProjectEntries";
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
      <div className="projects">
        <div className="projectsContent">
          <h3>Title</h3>
          <p>Purpose:</p>
          <ul>
            <li>Content Here</li>
          </ul>
          <p>Resources Used:</p>
          <ul>
            <li>Content Here</li>
          </ul>
          <p>Challenges:</p>
          <ul>
            <li>Content Here</li>
          </ul>
          <p>Potential Future Improvements:</p>
          <ul>
            <li>Content Here</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projects;
