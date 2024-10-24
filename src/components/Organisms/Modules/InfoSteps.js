import InfoStep from "../../Atoms/InfoStep";
import "./InfoSteps.css"

function InfoSteps({project}){
    let itemCount = 0
    return(
        <div className="features-container">
            <div className="features">
                    {project.features.map((feature, index) => {
                        itemCount++;
                        return (
                            <InfoStep 
                                eyebrow={`Feature ${itemCount}`}
                                heading={feature.name}
                                description={feature.descriptions}
                                input={feature.input}
                                output={feature.output}
                                image={feature.image}/>
                        );
                    })}
                </div>
        </div>
    )
}

export default InfoSteps