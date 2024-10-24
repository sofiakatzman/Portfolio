function StackedText({ title, text }) {
    const renderWithLineBreaks = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    return (
        <div>
            <h2 className="stacked-text">{title}</h2>
            <p className="xsm">{renderWithLineBreaks(text)}</p>
        </div>
    );
}

export default StackedText;