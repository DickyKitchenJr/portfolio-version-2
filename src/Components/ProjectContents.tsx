import { useEffect, useState } from "react";
import { ProjectEntries } from "./ProjectEntries";

interface ProjectContentsProps {
  styling: string, 
  displayProject: number;
}

function ProjectContents({ displayProject, styling }: ProjectContentsProps) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);
    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, [windowSize]);

  return (
    <>
      {ProjectEntries.map((entry) => {
        return (
          <div
            key={ProjectEntries.indexOf(entry)}
            style={
              styling === "default"
                ? {
                    backgroundImage:
                      windowSize.width >= 600
                        ? `url(${entry.backgroundImage})`
                        : `url(${entry.backgroundImageSmall})`,
                    display:
                      displayProject !== ProjectEntries.indexOf(entry)
                        ? "none"
                        : "block",
                  }
                : {
                    display:
                      displayProject !== ProjectEntries.indexOf(entry)
                        ? "none"
                        : "block",
                  }
            }
            className={`${styling}-projects`}
          >
            <div className={`${styling}-projectsContent`}>
              <h3>{entry.Title}</h3>
              <p>Purpose:</p>
              <ul>
                {entry.Purpose.map((reason) => {
                  return <li>{reason}</li>;
                })}
              </ul>
              {entry.ClientReview ? (
                <>
                  <p>Client Review:</p>
                  <ul>
                    <li>{entry.ClientReview}</li>
                  </ul>
                </>
              ) : null}
              <p>Resources Used:</p>
              <ul>
                {entry.Resources.map((used) => {
                  return <li>{used}</li>;
                })}
              </ul>
              <p>Achievements:</p>
              <ul>
                {entry.Achievements.map((achievement) => {
                  return <li>{achievement}</li>;
                })}
              </ul>
              {entry.Test ? (
                <img
                  src={entry.Test}
                  alt="score from page speed insight"
                  className={`${styling}-pagespeed`}
                />
              ) : null}
              {entry.Improvements ? (
                <>
                  <p>Potential Future Improvements:</p>
                  <ul>
                    {entry.Improvements.map((improve) => {
                      return <li>{improve}</li>;
                    })}
                  </ul>
                </>
              ) : null}
              {entry.Source ? (
                <>
                  <p>Source Code:</p>
                  <ul>
                    <li>
                      <a
                        className={`${styling}-link`}
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
                  <p>Live Site:</p>
                  <ul>
                    <li>
                      <a
                        className={`${styling}-link`}
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
    </>
  );
}

export default ProjectContents;
