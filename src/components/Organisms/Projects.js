import { useState } from "react"

function Projects(){
    

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
            Projects! 
            Project Image
            Project Name
            Project Description
            <button onClick={goBackward}>backward</button>
            {projIndex}
            <button onClick={goForward}>forward</button>
        </div>
    )
}

export default Projects