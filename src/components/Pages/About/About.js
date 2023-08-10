import React from "react"
import './About.css'
import headshot from '../../../assets/headshot.jpg'

function About(){

    return(
        <div className="about">
            <div className="about-container">
                <div className="about-headshot">
                    <img src={headshot} alt="Headshot" className="circle-image" />
                </div>
                <div className="about-blurb">
                    <h2>Full Stack Web Developer</h2>
                    <h3>New York, NY </h3>
                    <p>Hello! I'm Sofia, an artist turned software engineer.</p>
                    <p>With my diverse background in operations, logistics, and design, I am able to craft innovative and eclectic solutions for all web development needs. </p>  
                </div>
                
            </div>
        </div>

  
    )
}

export default About