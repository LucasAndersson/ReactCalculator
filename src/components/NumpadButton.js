import React from 'react';
import './NumpadButton.css'

function NumpadButton(props) {
    return <button className={props.className ? props.className : "NumpadButton"} onClick={props.onClick} value={props.value}>{props.value}</button>
}

export default NumpadButton;
