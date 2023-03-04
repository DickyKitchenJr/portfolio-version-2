import React, { useState } from "react";
import NewProjectContents from "./NewProjectContents";
import { NewProjectEntries } from "./NewProjectEntries";

function NewProjects({styling}) {
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
      <div className={`${styling}-projectsTitle`}>
        <h2>Projects</h2>
        <button className={`${styling}-previous`} onClick={handleClickPrior}>
          Prior
        </button>
        <button className={`${styling}-next`} onClick={handleClickNext}>
          Next
        </button>
      </div>
      <NewProjectContents displayProject={displayProject} styling={styling}/>
    </>
  );
}

export default NewProjects;
