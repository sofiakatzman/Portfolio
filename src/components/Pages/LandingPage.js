import ContactForm from "../Organisms/ContactForm"
import Featured from "../Organisms/Featured"
import Footer from "../Organisms/Footer.js"
import Intro from "../Organisms/Intro"
import Projects from "../Organisms/Projects.js"
import Skills from "../Organisms/Skills"

function LandingPage(){
    return(
        <div>
            <Intro />
            <Skills />
            <Featured />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default LandingPage