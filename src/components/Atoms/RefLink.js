function RefLink({ url, img, altText }) {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={altText} />
            </a>
        </div>
    );
}

export default RefLink;