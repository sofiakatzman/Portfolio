import React from "react"

function Contact(){

    const LINKEDIN_LOGO = "https://cdn-icons-png.flaticon.com/512/38/38669.png"
    const GITHUB_LOGO = "https://pngimg.com/uploads/github/github_PNG80.png"
    const MEDIUM_LOGO = "https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"

    const LINKEDIN_URL = "https://www.linkedin.com/in/sofia-katzman/"
    const GITHUB_LINK = "https://github.com/sofiakatzman"
    const MEDIUM_LINK = "https://medium.com/@katzmansof"

    const contactLinks = { 
        linkedin : {
            logo : LINKEDIN_LOGO, 
            url : LINKEDIN_URL
        },
        github : {
            logo: GITHUB_LOGO,
            url: GITHUB_LINK
        },
        medium : {
            logo: MEDIUM_LOGO,
            url: MEDIUM_LINK
        }
    }

    return(
        <>
        {Object.keys(contactLinks).map(key => (
            <div key={key} className="contact">
                <img src={contactLinks[key].logo} alt={key} />
                <a href={contactLinks[key].url}>{key}</a>
            </div>
        ))}
        </>
    )
}

export default Contact