import React, { useState } from 'react';
import { ProjectEntries } from '../Components/ProjectEntries';
import AltProjectContent from './AltProjectContent';

function AltProjects() {
      const [displayProject, setDisplayProject] = useState(0);

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
      <div className="altProjectsTitle">
        <h2>Projects</h2>
        <button className="altPrevious" onClick={handleClickPrior}>
          Prior
        </button>
        <button className="altNext" onClick={handleClickNext}>
          Next
        </button>
      </div>
      <AltProjectContent displayProject={displayProject} />
    </>
  );
}

export default AltProjects
