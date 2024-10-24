import "./style.css"

function SidedText({number, strong, text}){
    return(
        <div className="flex-container sided-text">
            <h2 className="sided-text">{number}</h2>
            <p className="xsm"><strong className="sided-text">{strong}: </strong> {text}</p>
        </div>
    )
}

export default SidedText