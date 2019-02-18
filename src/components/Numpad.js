import React from 'react';
import NumpadButton from './NumpadButton';
import './NumpadButton.css';

function Numpad(props) {
    return (
        <div>
            <div>
                <NumpadButton value='C' onClick={props.handleClearButtonClick} />
                <NumpadButton value='+/-' />
                <NumpadButton value='%' />
                {/* NumpadButton -> NumpadOperatorButton? */}
                <NumpadButton className='NumpadOperatorButton' onClick={props.handleOperatorButtonClick} value='÷' />
            </div>
            <div>
                {/* NumpadButton -> NumpadNumberButton? */}
                <NumpadButton onClick={props.handleNumberButtonClick} value='7' />
                <NumpadButton onClick={props.handleNumberButtonClick} value='8' />
                <NumpadButton onClick={props.handleNumberButtonClick} value='9' />
                <NumpadButton className="NumpadOperatorButton" onClick={props.handleOperatorButtonClick} value='x' />
            </div>
            <div>
                <NumpadButton onClick={props.handleNumberButtonClick} value='4' />
                <NumpadButton onClick={props.handleNumberButtonClick} value='5' />
                <NumpadButton onClick={props.handleNumberButtonClick} value='6' />
                <NumpadButton className="NumpadOperatorButton" onClick={props.handleOperatorButtonClick} value='-' />
            </div>
            <div>
                <NumpadButton onClick={props.handleNumberButtonClick} value='1' />
                <NumpadButton onClick={props.handleNumberButtonClick} value='2' />
                <NumpadButton onClick={props.handleNumberButtonClick} value='3' />
                <NumpadButton className='NumpadOperatorButton' onClick={props.handleOperatorButtonClick} value='+' />
            </div>
            <div>
                <NumpadButton className='NumpadZeroButton' onClick={props.handleNumberButtonClick} value='0' />
                <NumpadButton onClick={props.handleCommaButtonClick} value=',' />
                <NumpadButton className='NumpadOperatorButton' onClick={props.handleEqualsButtonClick} value='=' />
            </div>
        </div>
    );
}

export default Numpad;
