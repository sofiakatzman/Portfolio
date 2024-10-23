import { useState } from "react"
import { projectsData } from "../../data/projectsData.js"
import "./Project.css"
import WorkCard from "../Atoms/WorkCard.js"

function Projects(){
    const projectCount=projectsData.length

    const [projIndex, setProjIndex] = useState(0)

    function goForward(){
        if(projIndex <= projectCount-2){
            setProjIndex(projIndex+1)
        }else{
            setProjIndex(0)
        }
    }

    function goBackward(){
        if (projIndex === 0) {
            setProjIndex(projectCount - 1); 
        } else {
            setProjIndex(projIndex - 1);
        }
    }

    return(
         <div className="project-container" id="work" >
            <div className="carousel-container">
                <button onClick={goBackward} className="proj-arrow back">◄</button>
                <img
                    src={projectsData[projIndex].image}
                    alt={projectsData[projIndex].name}
                    className="proj-img"
                />
                <button onClick={goForward} className="proj-arrow next">►</button>
            </div>
                <WorkCard 
                    title = {projectsData[projIndex].name} 
                    content ={projectsData[projIndex].description}
                    tags = {projectsData[projIndex].tags}    
                    altText= {projectsData[projIndex].name}
                    cta1 = {projectsData[projIndex].cta1_url}
                    cta1Copy = {projectsData[projIndex].cta1_copy}
                    cta2 = {projectsData[projIndex].cta2_url}
                    cta2Copy = {projectsData[projIndex].cta2_copy}
                />
        </div>
    )
}

export default Projects