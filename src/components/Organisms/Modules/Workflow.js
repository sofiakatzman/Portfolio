import SidedText from "../../Atoms/SidedText";
import "./Workflow.css"

function Workflow({ project }) {
    let itemCount = 0

    return (
        <div className="workflow">   
            <div>
                <h2>Addressing Workflow Challenges</h2>
                <p className="sm">{project.phasesdescription}</p>
            </div>

            <div className="flex-container space-between sm-spacer">
            <h2>Proof of Concept Phases</h2>
                <div className="phases">
                    {project.phases.map((phase, index) => {
                        itemCount++;
                        return (
                            <SidedText 
                                key={index} 
                                strong={phase.strong} 
                                text={phase.text} 
                                number={itemCount}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Workflow;