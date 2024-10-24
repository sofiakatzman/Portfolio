import StackedLogo from "../../Atoms/StackedLogo";
import "./ToolStack.css"

function ToolStack({ project }) {
    console.log(project);
    return (
        <div className="ts-container">
            <h2 className="">Tool Stack</h2>
            <p className="sm ts">{project.toolstack}</p>
            <div className="flex-container sm-spacer space-around">
                {project.tools.map((tool) => {
                    return (
                        <StackedLogo tool={tool} key={tool.name} />
                    );
                })}
            </div>
            <div></div>
        </div>
    );
}

export default ToolStack;