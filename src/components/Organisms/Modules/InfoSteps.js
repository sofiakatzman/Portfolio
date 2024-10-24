import InfoStep from "../../Atoms/InfoStep";
import "./InfoSteps.css"

function InfoSteps({project}){
    let itemCount = 0
    return(
        <div className="features-container">
            <div className="features">
                    <h2>Project Features</h2>
                    <div className="xsm-spacer">
                    {project.features.map((feature, index) => {
                        itemCount++;
                        return (
                            <div>
                            <InfoStep 
                                eyebrow={`Feature ${itemCount}`}
                                heading={feature.name}
                                description={feature.descriptions}
                                input={feature.input}
                                output={feature.output}
                                image={feature.image}/>
                            </div>
                        );
                    })}
                    </div>
                </div>
        </div>
    )
}

export default InfoSteps