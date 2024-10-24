import "./skills.css"
import airtable from "../../assets/tools/tools-airtable.png"
import css from "../../assets/tools/tools-css.png"
import figma from "../../assets/tools/tools-figma.png"
import flask from "../../assets/tools/tools-flask.png"
import html from "../../assets/tools/tools-html.png"
import js from "../../assets/tools/tools-js.png"
import ts from "../../assets/tools/tools-ts.png"
import openai from "../../assets/tools/tools-openai.png"
import python from "../../assets/tools/tools-python.png"
import zapier from "../../assets/tools/tools-zapier.png"
import react from "../../assets/tools/tools-react.png"
import gcp from "../../assets/tools/tools-gcp.png"
import adobe from "../../assets/tools/tools-adobe.png"

function Skills() {
    const languages = [
        { src: python, alt: "Python", label: "Python" },
        { src: js, alt: "JavaScript", label: "JavaScript" },
        { src: ts, alt: "TypeScript", label: "TypeScript" },
        { src: react, alt: "React", label: "React" },
        { src: html, alt: "HTML", label: "HTML" },
        { src: css, alt: "CSS", label: "CSS" },
        { src: flask, alt: "Flask", label: "Flask" },
    ];

    const tools = [
        { src: openai, alt: "OpenAI", label: "OpenAI" },
        { src: gcp, alt: "Google Cloud Platform", label: "GCP" },
        { src: zapier, alt: "Zapier", label: "Zapier" },
        { src: airtable, alt: "Airtable", label: "Airtable" },
        { src: figma, alt: "Figma", label: "Figma" },
        { src: adobe, alt: "Adobe", label: "Adobe" },
    ];



    return (
        // <div className="skills-container">
        //     <h1 className="light">Tools & Technologies</h1>
        //     <div className="flex-container skills-imgs">
        //         {tools.map(tool => (
        //             <div className="tool-container" key={tool.alt}>
        //                 <img src={tool.src} alt={tool.alt} />
        //                 <span className="tooltip">{tool.label}</span>
        //             </div>
        //         ))}
        //     </div>
        // </div>


        <div className="skills-container">
            <div className="flex-container space-around">
                <div className="flex-container skills-imgs">
                    {languages.map(language => (
                        <div className="tool-container" key={language.alt}>
                            <img src={language.src} alt={language.alt} />
                            <span className="tooltip">{language.label}</span>
                        </div>
                    ))}
                </div>
                <div className="burst">
                    <h2>Languages</h2>
                    <p className="xsm">These programming languages are my toolkit for turning ideas into reality and tackling complex challenges. With a solid understanding of each, I can build versatile solutions that meet a variety of project needs.</p>
                </div>
            </div>
            <div className="flex-container spacer space-around">
                <div className="burst ">
                    <h2>API's & Tools</h2>
                    <p className="xsm">These APIs help me automate tasks and manage data effortlessly, while traditional tools allow me to focus on creating impactful results. Together, they enable me to integrate functionalities and custom solutions with ease.</p>
                </div>
                <div className="flex-container skills-imgs">
                    {tools.map(tool => (
                        <div className="tool-container" key={tool.alt}>
                            <img src={tool.src} alt={tool.alt} />
                            <span className="tooltip">{tool.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;