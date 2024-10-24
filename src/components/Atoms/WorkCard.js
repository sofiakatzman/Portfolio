import "./style.css"
function WorkCard({ title, content, tags, cta1, cta2, cta1Copy, cta2Copy, img, altText }) {
    return (
        <div className="border-noshadow work-card">
            <div className="flex-container space-between">
                <h2>{title}</h2>
                    <div className="flex-container label-container">
                        {tags.map((tag, index) => (
                            <span key={index} className="label">{tag}</span>
                        ))}
                    </div>
            </div>
            <hr className="dashed-line" />

            <div className="flex-container">
                <p className="xsm">{content}</p>
                {img && <img src={img} alt={altText} className="work-imgs"/>}
            </div>
            <div className="flex-container">
                <a href={cta1}><p className="xsm"><b>{cta1Copy} </b></p></a>
                <a href={cta2}><p className="xsm  lp"><b> {cta2Copy}</b></p></a>
            </div>



        </div>
    );
}

export default WorkCard;