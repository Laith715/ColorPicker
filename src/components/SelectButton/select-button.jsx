import React from 'react';
import './select-button.css';

function SelectButton(props) {
    return (
        <button className={'button-block select-button'} onClick={props.onClick}>▼</button>
    );
}
export default SelectButton;