import React from "react";

function Popup({ content, onClose }) {
  return (
    <div className="skills-popup">
      <div className="popup-content">
        <span>{content}</span>
        <button onClick={onClose} className="close-button">
          x
        </button>
        <span>
          <p>
            Lorem ipsum alsdj asdkj wiemd dweoirti tgheoopa asd roeirjf
            aslsdliuei fdhasdi orem ipsum alsdj asdkj wiemd dweoirti tgheoopa
            asd roeirjf aslsdliuei fdhasdi orem ipsum alsdj asdkj wiemd dweoirti
            tgheoopa asd roeirjf aslsdliuei fdhasdi orem ipsum alsdj asdkj wiemd
            dweoirti tgheoopa asd roeirjf aslsdliuei fdhasdi orem ipsum alsdj
            asdkj wiemd dweoirti tgheoopa asd roeirjf aslsdliuei fdhasdi orem
            ipsum alsdj asdkj wiemd dweoirti tgheoopa asd roeirjf aslsdliuei
            fdhasdi.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Popup;
