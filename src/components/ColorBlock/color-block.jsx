import React, { useEffect } from 'react';
import './color-block.css';

function ColorBlock(props) {
    const { color } = props;
    return (
        <div style={{ backgroundColor: color }} className={'block'}></div>
    );
}
export default ColorBlock;