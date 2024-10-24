import FormText from "../Atoms/FormText"
import Contact from "../Molecules/Contact"
import "./contactForm.css"

function ContactForm(){
    return(
    <div className="flex-container space-between contact-form">
        <FormText />
        <Contact />
    </div>
    )
}

export default ContactForm