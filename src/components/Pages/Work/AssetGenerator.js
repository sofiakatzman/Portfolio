import Description from "../../Organisms/Modules/Description"
import { projectsData } from "../../../data/projectsData.js"
import Workflow from "../../Organisms/Modules/Workflow.js"
import { useEffect } from "react";
import InfoSteps from "../../Organisms/Modules/InfoSteps.js";
import ContactForm from "../../Organisms/ContactForm.js";
import Footer from "../../Organisms/Footer.js";


function AssetGenerator(){
    useEffect(() => {
        document.body.style.backgroundColor = '#F7F4EF';
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, []);

    return(
        <div>
            <Description project={projectsData[1]}/>
            <Workflow project={projectsData[1]}/>
            <InfoSteps project={projectsData[1]}/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default AssetGenerator