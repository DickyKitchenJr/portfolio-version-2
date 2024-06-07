import { ProjectEntries } from "./ProjectEntries";

interface ProjectContentsProps {
  displayProject: number;
}

function ProjectContents({ displayProject }: ProjectContentsProps) {
  return (
    <>
      <div className="project">
        {ProjectEntries.map((entry) => {
          return (
            <div
              key={ProjectEntries.indexOf(entry)}
              style={{
                display:
                  displayProject !== ProjectEntries.indexOf(entry)
                    ? "none"
                    : "block",
              }}
              className="projects"
            >
              <div className="projectsContent">
                <h3>{entry.Title}</h3>
                <h4>Purpose:</h4>
                <ul>
                  {entry.Purpose.map((reason) => {
                    return <li>{reason}</li>;
                  })}
                </ul>
                {entry.ClientReview ? (
                  <>
                    <h4>Client Review:</h4>
                    <ul>
                      <li>{entry.ClientReview}</li>
                    </ul>
                  </>
                ) : null}
                <h4>Resources Used:</h4>
                <ul>
                  {entry.Resources.map((used) => {
                    return <li>{used}</li>;
                  })}
                </ul>
                <h4>Achievements:</h4>
                <ul>
                  {entry.Achievements.map((achievement) => {
                    return <li>{achievement}</li>;
                  })}
                </ul>
                {entry.Source ? (
                  <>
                    <h4>Source Code:</h4>
                    <ul>
                      <li>
                        <a
                          className="link"
                          href={entry.Source}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </>
                ) : null}
                {entry.Live ? (
                  <>
                    <h4>Live Site:</h4>
                    <ul>
                      <li>
                        <a
                          className="link"
                          href={entry.Live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Hosted Here
                        </a>
                      </li>
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectContents;
