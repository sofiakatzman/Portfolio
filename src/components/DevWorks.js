import React from "react";
import PROJECTSDATA from "../assets/projectsdata";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function DevWorks() {
  const projectsArray = Object.values(PROJECTSDATA);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BackButton />
      <h1 className="">Dev Projects</h1>
      <div className="project-container">
        {projectsArray.map((project) => (
          <div className="project-card" key={project.name}>
            {/* <img src={project.image} alt={`${project.name} placeholder`} /> - removing img for now, might make it optional*/}
            <h2 className="project">{project.name}</h2>
            <p className="project">{project.summary}</p>
            <h3 className="project">Technologies</h3>
            <div className="project-technologies-container">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-technology">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to={`/project/${project.name}`}
              onClick={scrollToTop} // Scroll to top when clicking the link
              className="view-project"
            >
              view project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevWorks;
