import React, { useState } from "react";
import NewProjectContents from "./NewProjectContents";
import { NewProjectEntries } from "./NewProjectEntries";
import "../Components/Projects.css";

function NewProjects() {
  const [displayProject, setDisplayProject] = useState(0);

  const handleClickPrior = () => {
    if (displayProject === 0) {
      setDisplayProject(NewProjectEntries.length -1);
    } else {
      setDisplayProject(displayProject - 1);
    }
  };

  const handleClickNext = () => {
    if (displayProject === NewProjectEntries.length -1) {
      setDisplayProject(0);
    } else {
      setDisplayProject(displayProject + 1);
    }
  };

  return (
    <>
      <div className="projectsTitle">
        <h2>Projects</h2>
        <button className="previous" onClick={handleClickPrior}>
          Prior
        </button>
        <button className="next" onClick={handleClickNext}>
          Next
        </button>
      </div>
      <NewProjectContents displayProject={displayProject} />
    </>
  );
}

export default NewProjects;
