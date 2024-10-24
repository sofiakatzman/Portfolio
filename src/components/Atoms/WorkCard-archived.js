import "./style.css"
function WorkCard({ title, content, tags, link, img, altText }) {
    return (
        <div className="border-shadow work-card">
            <div className="flex-container space-between">
            <h2>{title}</h2>
            <div className="flex-container label-container">
                {tags.map((tag, index) => (
                    <span key={index} className="label">{tag}</span>
                ))}
            </div>
            </div>
            ---------------------------------------------
            <div className="flex-container">
            <p className="xsm">{content}</p>
            <img src={img} alt={altText} className="work-imgs"/>
            </div>
            <a href={link}><p className="xsm"><b>Read More</b></p></a>

        </div>
    );
}

export default WorkCard;