import ContactForm from "../Organisms/ContactForm"
import Featured from "../Organisms/Featured"
import Intro from "../Organisms/Intro"
import Skills from "../Organisms/Skills"

function LandingPage(){
    return(
        <div>
            <Intro />
            <Skills />
            <Featured />
            <ContactForm />
        </div>
    )
}

export default LandingPage