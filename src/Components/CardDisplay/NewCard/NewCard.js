import React, { useEffect } from "react";
import { useState } from "react";
import './NewCard.css';

let NewCard = (props) => {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [textChanged, setTextChanged] = useState(false);

    const handleTitleChanged = (e) => {
        setTextChanged(true);
        setTitle(e.target.value);
    }

    const handleTextChanged = (e) => {
        setTextChanged(true);
        setText(e.target.value);
    }

    const handleSaveCard = () => {
        props.saveCard({title, text});
        setTitle("");
        setText("");
        setTextChanged(false);
    }

    return (
        <div className="card_container newCard" tabIndex="0">
            <div className="card-content_container">
                <input type="text" className="card-content_title newCard" value={title} onChange={handleTitleChanged} placeholder="New Flash Card"></input>
                <textarea className="card-content_text newCard" value={text} onChange={handleTextChanged} placeholder="Type your information here!"></textarea>
            </div>
            <div className="card-controls_container newCard">
                {textChanged && <button className={`card-button_save card-controls`} onClick={handleSaveCard}>save</button>}
            </div>
        </div>
    );

}

export default NewCard;