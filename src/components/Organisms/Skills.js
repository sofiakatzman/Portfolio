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


function Skills(){
    return(
        <div className="skills-container">
            <h1 className="light">Tools & Technologies</h1>
            <div className="flex-container skills-imgs">
                <img src={python} alt="python"/>
                <img src={js} alt="javascript"/>
                <img src={ts} alt="typescript"/>
                <img src={react} alt="react"/>
                <img src={html} alt="html"/>
                <img src={css} alt="css"/>
                <img src={flask} alt="flask"/>
                <img src={openai} alt="openai"/>
                <img src={gcp} alt="google-cloud-platform"/>
                <img src={zapier} alt="zapier"/>
                <img src={airtable} alt="airtable"/>
                <img src={figma} alt="figma"/>
                <img src={adobe} alt="adobe"/>
            </div>
        </div>
    )
}

export default Skills