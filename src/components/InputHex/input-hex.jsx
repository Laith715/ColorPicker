import React from 'react';
import './input-hex.css';

function InputHex(props) {
    const { value } = props;
    return (
        <input className={'input-hex'} readOnly={true} value={value} type={'text'}></input>
    );
}
export default InputHex;