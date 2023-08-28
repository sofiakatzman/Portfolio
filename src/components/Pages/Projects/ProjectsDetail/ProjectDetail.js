import React from "react"
import { useParams } from "react-router-dom"
import PROJECTSDATA from "../ProjectsData"
import "./ProjectDetail.css"

function ProjectDetail() {
  const { name } = useParams()

  // Find the project by name in the PROJECTSDATA array
  const project = PROJECTSDATA.find((proj) => proj.name === name)

  if (!project) {
    return <div>Project not found.</div>
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.summary}</p>
      <p><i>{project.stack}</i></p>
   
      {/* Render other project details here */}
      <div className="project-details">
        <h2>Key Features</h2>
        <ul>
          {project.details.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          {project.details.technologyStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h2>Achievements</h2>
        <ul>
          {project.details.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default ProjectDetail