import { useState } from "react";
import ProjectContents from "./ProjectContents";
import { ProjectEntries } from "./ProjectEntries";

function Projects() {
  const [displayProject, setDisplayProject] = useState<number>(0);

  const handleClickPrior = () => {
    if (displayProject === 0) {
      setDisplayProject(ProjectEntries.length - 1);
    } else {
      setDisplayProject(displayProject - 1);
    }
  };

  const handleClickNext = () => {
    if (displayProject === ProjectEntries.length - 1) {
      setDisplayProject(0);
    } else {
      setDisplayProject(displayProject + 1);
    }
  };

  return (
    <>
      <h2>Projects</h2>
      <div className="project-buttons">
        <button className="prior" onClick={handleClickPrior}>
          ◄ Prior
        </button>
        <button className="next" onClick={handleClickNext}>
          Next ►
        </button>
      </div>
      <ProjectContents displayProject={displayProject} />
    </>
  );
}

export default Projects;
