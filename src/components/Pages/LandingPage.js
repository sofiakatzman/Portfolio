import ContactForm from "../Organisms/ContactForm"
import Featured from "../Organisms/Featured"
import Footer from "../Organisms/Footer.js"
import Intro from "../Organisms/Intro"
import Skills from "../Organisms/Skills"

function LandingPage(){
    return(
        <div>
            <Intro />
            <Skills />
            <Featured />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default LandingPage