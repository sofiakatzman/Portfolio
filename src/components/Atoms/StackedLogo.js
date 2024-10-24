import "./style.css"
function StackedLogo({tool}){
    return(
        <div className="sl">
            <img src={tool.logo}/><br></br>
            {/* <strong>{tool.name}</strong> */}
            <p className="xsm">{tool.description}</p>
        </div>
    )
}

export default StackedLogo