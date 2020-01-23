import React, { useState, useEffect, useRef } from 'react';
import './slider-drop-down.css';
import Constants from '../../constants';
import ColorModel from '../../models/color.model';
import ColorBlock from '../ColorBlock/color-block';
import useOutsideClick from "../OutsideClick/outside-click";

function SliderDropDown(props) {
    const { onChange, onSelect, selected } = props;
    const [changed, setChanged] = useState(Object.assign(new ColorModel(), selected));
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => setOpen(false))

    useEffect(() => {
            setChanged(Object.assign(new ColorModel(), selected));
    }, [selected]);

    return (
        <div className={'slider-drop-down-wrapper'} ref={ref}>
            <div className={'slider-drop-down-header'} onClick={() => { setOpen(!isOpen); }
            }>
                <div className={'slider-drop-down-title'}>
                    <ColorBlock color={changed.hex}></ColorBlock>
                </div>
            </div>

            {isOpen &&
                <div className={'slider-drop-down-content'}><fieldset>
                    <label htmlFor="r">R</label>
                    <input type="range"
                        min={Constants.minRGB}
                        max={Constants.maxRGB}
                        step={Constants.RGBstep}
                        value={changed.R}
                        onChange={(event) => {
                            const newValue = new ColorModel('FromSlider', event.target.value, changed.G, changed.B);
                            setChanged(newValue);
                            onChange(newValue);
                        }
                        }
                    ></input>
                </fieldset>
                    <fieldset>
                        <label htmlFor="G">G</label>
                        <input type="range"
                            min={Constants.minRGB}
                            max={Constants.maxRGB}
                            step={Constants.RGBstep}
                            value={changed.G}
                            onChange={(event) => {
                                const newValue = new ColorModel('FromSlider', changed.R, event.target.value, changed.B);
                                setChanged(newValue);
                                onChange(newValue);
                            }}></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="B">B</label>
                        <input type="range"
                            min={Constants.minRGB}
                            max={Constants.maxRGB}
                            step={Constants.RGBstep}
                            value={changed.B}
                            onChange={(event) => {
                                const newValue = new ColorModel('FromSlider', changed.R, changed.G, event.target.value);
                                setChanged(newValue);
                                onChange(newValue);
                            }}></input>
                    </fieldset>
                    <fieldset>
                        <div className={'slider-buttons'}>
                            <button className={'cancel-button'}
                                onClick={() => {
                                    setChanged(selected);
                                    setOpen(false);
                                }}>
                                Cancel
                                </button>
                            <button
                                onClick={() => {
                                    const newValue = new ColorModel('FromSlider', changed.R, changed.G, changed.B)
                                    onSelect(newValue);
                                    setOpen(false);
                                }}
                                className={'ok-button'}>
                                Ok
                            </button>
                        </div>
                    </fieldset>
                </div>}
        </div >
    );
}
export default SliderDropDown;