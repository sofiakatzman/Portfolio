import React from "react"
import About from "../About/About"
import Technologies from "../Technologies/Technologies"
import Projects from "../Projects/Projects"

function Home(){
    return(
        <div>
            <About /> 
            <Technologies />
            <Projects />
        </div>
    )
}

export default Home