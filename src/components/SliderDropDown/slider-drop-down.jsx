import React, { useState, useEffect } from 'react';
import './slider-drop-down.css';
import Constants from '../../constants';
import ColorModel from '../../models/color.model';
import ColorBlock from '../ColorBlock/color-block';

function SliderDropDown(props) {
    const { onChange, onSelect, selected } = props;
    const [previouslySelected, setPreviouslySelected] = useState(selected);
    const [changed, setChanged] = useState(Object.assign(new ColorModel(), selected));
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        if (previouslySelected !== selected) {
            setChanged(Object.assign(new ColorModel(), selected));
            console.log(selected.hex);
            setPreviouslySelected(selected);
        }
    });
    return (
        <div className={'slider-drop-down-wrapper'}>
            <div className={'slider-drop-down-header'} onClick={() => setOpen(!isOpen)}>
                <div className={'slider-drop-down-title'}><ColorBlock color={changed.hex}></ColorBlock></div>

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
                    </div>}
            </div>
        </div >
    );
}
export default SliderDropDown;