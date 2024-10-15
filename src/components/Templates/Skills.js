import "./skills.css"
import skillsImage from "../../assets/skills-placeholder.png"

function Skills(){
    return(
        <div className="skills-container">
            <h1 className="light">Skills & Tools</h1>
            <div className="flex-container skills-imgs">
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>
                <img src={skillsImage} alt="skills-placeholder"/>

            </div>
           
        </div>
    )
}

export default Skills