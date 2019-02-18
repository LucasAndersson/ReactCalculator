import React from 'react';
import './Screen.css';

function Screen(props) {
    return <textarea className="Screen" disabled value={props.textareaValue}></textarea>;
}

export default Screen;
