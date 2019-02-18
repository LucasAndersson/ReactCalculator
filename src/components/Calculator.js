import React, { Component } from 'react';
import './Calculator.css'
import Screen from './Screen.js';
import Numpad from './Numpad.js';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastTextareaValue: null,
            operator: null,
            textareaValue: '0',
            equalsClickedLast: false
        };
    }

    handleClearButtonClick = e => {
        this.setState({
            textareaValue: '0',
            equalsClickedLast: false
        })
    }

    handleCommaButtonClick = e => {
        const textareaValue = this.state.textareaValue;

        if (!textareaValue.includes(',')) {
            this.setState({
                textareaValue: textareaValue + ',',
                equalsClickedLast: false
            })
        }
    }

    handleNumberButtonClick = e => {
        const textareaValue = this.state.textareaValue;

        if (textareaValue === '0' || this.state.operator) {
            this.setState({
                textareaValue: e.target.value,
                equalsClickedLast: false
            });
        } else {
            this.setState({
                textareaValue: textareaValue + e.target.value,
                equalsClickedLast: false
            });
        }
    }

    handleOperatorButtonClick = e => {
        this.setState({
            lastTextareaValue: this.state.textareaValue,
            operator: e.target.value,
            equalsClickedLast: false
        });
    }

    handleEqualsButtonClick = e => {
        const lastTextareaValue = this.state.lastTextareaValue;
        const operator = this.state.operator;
        const textareaValue = this.state.textareaValue;

        if (lastTextareaValue && operator && textareaValue) {
            let result = this.calculate(lastTextareaValue, operator, textareaValue);

            if (result) {
                if (this.state.equalsClickedLast) {
                    this.setState({textareaValue: result});    
                } else {
                    this.setState({
                        lastTextareaValue: textareaValue,
                        textareaValue: result, 
                        equalsClickedLast: true
                    });
                }
            }
        }
    }

    calculate(x, operator, y) {
        switch (operator) {
            case '÷':
                return parseInt(x) / parseInt(y) + '';
            case 'x':
                return parseInt(x) * parseInt(y) + '';
            case '-':
                return parseInt(x) - parseInt(y) + '';
            case '+':
                return parseInt(x) + parseInt(y) + '';
            default:
                console.error("Unknown operator: " + operator);
                return null;
        }
    }

    render() {
        return (
            <div className="Calculator">
                <Screen textareaValue={this.state.textareaValue} />
                <Numpad
                    handleClearButtonClick={this.handleClearButtonClick}
                    handleOperatorButtonClick={this.handleOperatorButtonClick}
                    handleNumberButtonClick={this.handleNumberButtonClick}
                    handleCommaButtonClick={this.handleCommaButtonClick}
                    handleEqualsButtonClick={this.handleEqualsButtonClick}
                />
            </div>
        );
    }
}

export default Calculator;
