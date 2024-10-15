import WorkCard from "../Atoms/WorkCard";
import "./styles.css"
function WorkCards({ data }) {
    return (
        <div className="flex-container work-cards">
            {data.map((element, index) => (
                <WorkCard
                    className="work-cards"
                    key={index} 
                    url={element.url}
                    img={element.img}
                    title={element.title}
                    content={element.content}
                    link={element.link}
                    tags={element.tags}
                />
            ))}
        </div>
    );
}

export default WorkCards;