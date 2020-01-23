import React from 'react';
import './root.css';
import ColorPicker from '../../components/ColorPicker/color-picker';

function Root() {
    return (
        <div className={'root'}>
            <ColorPicker></ColorPicker>
        </div>);
}

export default Root;
