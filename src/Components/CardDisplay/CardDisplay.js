import React, { useEffect } from "react";
import { useState } from "react";
import './CardDisplay.css';

let CardDisplay = (props) => {

    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
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
        props.editCard(props.id, {title, text});
        setTextChanged(false);
    }

    return (
        <div className="card_container" tabIndex="0">
            <div className="card-content_container">
                <input type="text" className="card-content_title" value={title} onChange={handleTitleChanged}></input>
                <textarea className="card-content_text" value={text} onChange={handleTextChanged}></textarea>
            </div>
            <div className="card-controls_container">
                <button className="card-button_delete card-controls" onClick={() => props.deleteCard(props.id)}>delete</button>
                {textChanged && <button className={`card-button_save card-controls`} onClick={handleSaveCard}>save</button>}
            </div>
        </div>
    );

}

export default CardDisplay;