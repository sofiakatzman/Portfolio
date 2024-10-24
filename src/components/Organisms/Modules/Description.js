import StackedText from "../../Atoms/StackedText"
import "./Description.css"

function Description({project}){
    return(
        <div className="pp-container">
            <img src={project.image} className="pp-img" alt={`${project.name} img`}/>
            <div >
                <h1 className="pp-description">{project.name}</h1>
                <p className="pp-description">{project.summary}</p>
                <div className="flex-container st">
                <StackedText title={"My Role"} text={project.role}/>
                <StackedText title={"Tools"} text={project.toolslist}/>
                <StackedText title={"Technologies"} text={project.technologies}/>
                <StackedText title={"APIs"} text={project.apis}/>
                </div>
                {project.project_page_link && <button onClick={() => window.location.href=project.project_page_link} className="button pp-description">
                    {project.project_page_copy}
                </button>}
            </div>
        </div>
    )
}

export default Description
