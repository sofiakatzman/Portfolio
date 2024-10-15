import WorkCards from "../Molecules/WorkCards.js"
import "./featured.css"
import { workCardsData } from "../../data/workCardsData.js"

function Featured(){
    return(
        <div className="featured-container">
            <h1>Featured Work</h1>
            <WorkCards data={workCardsData}/>
        </div>
    )
}

export default Featured