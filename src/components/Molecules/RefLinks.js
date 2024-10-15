import RefLink from "../Atoms/RefLink";
import "./styles.css"

function RefLinks({ data }) {
    return (
        <div className="flex-container ref-links">
            {data.map((element, index) => (
                <RefLink
                    key={index} 
                    url={element.url}
                    altText={element.altText}
                    img={element.img}
                />
            ))}
        </div>
    );
}

export default RefLinks;