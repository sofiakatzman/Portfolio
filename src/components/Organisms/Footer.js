import RefLinks from "../Molecules/RefLinks"
import { refLinksData } from '../../data/refLinksData'
import "./footer.css"
function Footer(){
    return(
        <div className="footer">
            <RefLinks data={refLinksData}/>
            <h2>Sofia Katzman</h2>
        </div>
    )
}

export default Footer