import { useState } from "react";
import ProjectContents from "./ProjectContents";
import { ProjectEntries } from "./ProjectEntries";

interface ProjectsProps {
  styling: string;
}

function Projects({ styling }: ProjectsProps) {
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
      <div className={`${styling}-projectsTitle`}>
        <h2>Projects</h2>
        <button className={`${styling}-previous`} onClick={handleClickPrior}>
          {styling === "modernLight" || styling === "modernDark" ? (
            <span>◄</span>
          ) : null}
          Prior
        </button>
        <button className={`${styling}-next`} onClick={handleClickNext}>
          Next
          {styling === "modernLight" || styling === "modernDark" ? (
            <span>►</span>
          ) : null}
        </button>
      </div>
      <ProjectContents displayProject={displayProject} styling={styling} />
    </>
  );
}

export default Projects;
