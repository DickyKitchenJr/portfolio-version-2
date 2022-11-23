import React from "react";
import "./Projects.css";
import { ProjectEntries } from "./ProjectEntries";

function ProjectContents() {
  return (
    <>
      {ProjectEntries.map((entry) => {
        return (
            <div key={ProjectEntries.indexOf(entry)} style={{backgroundImage: `url(${entry.backgroundImage})`}} className="projects">
          <div className="projectsContent">
            <h3>{entry.Title}</h3>
            <p>Purpose:</p>
            <ul>
                {entry.Pupose.map((reason) =>{
                    return(<li>{reason}</li>)
                })}
            </ul>
            <p>Resources Used:</p>
            <ul>
              {entry.Resources.map((used) =>{
                return(<li>{used}</li>)
              })}
            </ul>
            <p>Challenges:</p>
            <ul>
              {entry.Challenges.map((challenge) =>{
                return(<li>{challenge}</li>)
              })}
            </ul>
            <p>Potential Future Improvements:</p>
            <ul>
              {entry.Improvements.map((improve) => {
                return(<li>{improve}</li>)
              })}
            </ul>
            {entry.Source ? <><p>Source Code:</p>
            <ul>
              <li>
                <a className="link" href={entry.Source} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul></> : null}
            
            {entry.Live ? <><p>Live Site:</p>
            <ul>
              <li>
                <a className="link" href={entry.Live} target="_blank" rel="noreferrer">
                  Hosted Here
                </a>
              </li>
            </ul></> : null}
            
          </div>
        </div>
        )
      })}
    </>
  );
}

export default ProjectContents;
