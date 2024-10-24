import headshot from '../../assets/headshot.png' 
import RefLinks from '../Molecules/RefLinks'
import { refLinksData } from '../../data/refLinksData'
import './intro.css'

function Intro(){

    return(
        <div className="flex-container intro-container">
          <img src={headshot} alt="sk-headshot" className="sk-headshot"/>
          <div className="intro-textbox">
            <h1>Hello, I am Sofia!</h1>
            <h2 className='hero light'>Creative Technologist & Full Stack Developer </h2>
            <p>I build innovative solutions that merge <strong>technology</strong>, <strong>design</strong>, and <strong>automation</strong>—delivering powerful tools to <u><i>streamline workflows</i></u> and <u><i>scale businesses</i></u>.</p>
            <RefLinks data={refLinksData}/>
          </div>
        </div>
    )

}

export default Intro