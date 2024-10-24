import StackedText from "./StackedText"
import "./style.css"

function InfoStep({eyebrow, heading, description, input, output, image}){
    return(
      
            <div className="flex-container spacer m-gap"> 
                <div className="">
                    <h1 className="ist">{eyebrow}</h1>
                    <h2 className="ist">{heading}</h2>
                    <p className="xsm ist">{description}</p>
                    <div className="flex-container ">
                        <div className="fw">
                            <StackedText title="User Input" text={input} />
                        </div>
                        <div>
                            <StackedText title="App Output" text={output} />
                        </div>
                    </div>
                </div>
                <img src={image} className="ist"/>
               
            </div>
            
        
    )
}

export default InfoStep