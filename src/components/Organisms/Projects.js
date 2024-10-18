import { useState } from "react"
import { projectsData } from "../../data/projectsData.js"

function Projects(){

    console.log(projectsData)
    console.log(projectsData.length)
    

    const [projIndex, setProjIndex] = useState(0)

    function goForward(){
        if(projIndex <=4){
            setProjIndex(projIndex+1)
        }else{
            setProjIndex(0)
        }
    }

    function goBackward(){
        if(projIndex >=5){
            setProjIndex(projIndex-1)
        }else{
            setProjIndex(5)
        }
    }

    return(
         <div>
            <h2>{projectsData[projIndex].name}</h2>
            <img
                src={projectsData[projIndex].image}
                alt={projectsData[projIndex].name}
            />
            <p>{projectsData[projIndex].description}</p>
            <button onClick={goBackward}>backward</button>
            {projIndex}
            <button onClick={goForward}>forward</button>
        </div>
    )
}

export default Projects