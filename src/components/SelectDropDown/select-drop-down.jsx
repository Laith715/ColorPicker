import React, { useState, useRef } from 'react';
import './select-drop-down.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ColorBlock from '../ColorBlock/color-block';
import ColorModel from '../../models/color.model';
import useOutsideClick from "../OutsideClick/outside-click";

function SelectDropDown(props) {
    const { items, title, onSelect } = props;
    const [isOpen, setOpen] = useState(false);
    const [values] = useState(items);
    const ref = useRef();

    useOutsideClick(ref, () => setOpen(false))

    return (
        <div className={'drop-down-wrapper'} ref={ref}>
            <div className={'drop-down-header'} onClick={() => { setOpen(!isOpen); }}>
                <div className={'drop-down-title'}>{title}</div>
                {isOpen
                    ? <FontAwesomeIcon icon={faAngleUp} size="2x" />
                    : <FontAwesomeIcon icon={faAngleDown} size="2x" />
                }
            </div>
            {isOpen &&
                <ul className={'drop-down-list'}>{
                    values.map(item =>
                        (<li key={item.name}
                            className={'drop-down-list-item'}
                            onClick={() => {
                                onSelect(Object.assign(new ColorModel(), item));
                                setOpen(false);
                            }}>
                            {item.name}
                            <div className={'right vertical-center'}>
                                <ColorBlock color={item.hex}></ColorBlock>
                            </div>
                        </li>))
                }</ul>}
        </div >);
}
export default SelectDropDown;