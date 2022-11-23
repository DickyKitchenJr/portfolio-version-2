import React from "react";
import "./Projects.css";
import { ProjectEntries } from "./ProjectEntries";

function ProjectContents() {
  return (
    <>
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
          <p>Source Code:</p>
          <ul>
            <li>
              <a className="link" href="" target="_blank">
                Content Here
              </a>
            </li>
          </ul>
          <p>Live Site:</p>
          <ul>
            <li>
              <a className="link" href="" target="_blank">
                Content Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectContents;
