import React from "react"
import PROJECTSDATA from "./ProjectsData"
import { Link } from "react-router-dom"
import "./Projects.css" 

function Projects() {
    const projectsArray = Object.values(PROJECTSDATA)

    return (
        <div className="projects">
        <h2 className="title">PROJECTS</h2><br/>
        <div className="project-container">

            {projectsArray.map((project) => (
                
                <div className="project-card" key={project.name}>
                    {/* <Link to={`/project/${project.name}`} key={project.name}></Link> */}
                    <img src={project.image} alt={`${project.name}Image`} /> 
                    <h1>{project.name.toUpperCase()}</h1><br/>
                    <h3>{project.summary}</h3>
                    <p>{project.stack}</p>
                    <div className="buttons-container">
                    <a href={project.github}>GitHub</a>
                    <a href={project.walkthrough}>Demo</a>
                    </div>
                    {project.livedemo && <a href={project.livedemo} className="live" >Live</a>} <br/>
                    <div className="project-technologies-container">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="project-technologies">{tech}</span>
                            ))}     
                    </div>
                </div>
            ))}
        </div></div>
    )
}

export default Projects