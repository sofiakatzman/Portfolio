import React from "react";
import { useParams } from "react-router-dom";
import PROJECTSDATA from "../assets/projectsdata";
import GalleryView from "./GalleryView";

function DevProject() {
  const { name } = useParams();

  // Find the project by name in the PROJECTSDATA array
  const project = PROJECTSDATA.find((proj) => proj.name === name);

  if (!project) {
    return (
      <div>
        <p>Sorry! Project not found.</p>
      </div>
    );
  }

  return (
    <div className="project-info">
      <div className="project-header">
        <div className="case-study-card">
          <h1 className="project-name">{project.name}</h1>
          <GalleryView />
          <h2 className="project-case-study-header">CASE STUDY</h2>
          <p className="project-case-study">
            <b>Problem: </b> {project.caseStudy.problem}
          </p>
          <p className="project-case-study">
            <b>Solution: </b> {project.caseStudy.solution}
          </p>
        </div>
      </div>
      <div className="project-features">
        <h2>Key Features</h2>
        <p>
          <ul>
            {project.details.keyFeatures.map((feature, index) => (
              <li key={index} className="project-list-padded">
                {feature}
              </li>
            ))}
          </ul>
        </p>
        <br />
        <h2>Technology Stack</h2>
        <ul>
          {project.details.technologyStack.map((tech, index) => (
            <li key={index} className="project-list-padded">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-achievements">
        <h2>Achievements</h2>
        <ul>
          {project.details.achievements.map((achievement, index) => (
            <li key={index} className="project-list-padded">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DevProject;
