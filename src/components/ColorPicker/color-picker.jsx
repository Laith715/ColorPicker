import React, { useState, useEffect } from 'react';
import './color-picker.css';
import InputHex from '../InputHex/input-hex'
import SelectDropDown from '../SelectDropDown/select-drop-down';
import SliderDropDown from '../SliderDropDown/slider-drop-down';
import ColorModel from '../../models/color.model';
import Constants from '../../constants';

function ColorPicker(props) {

  const [colors, setColors] = useState(Constants.ColorSelectValues);
  const defaultColor = colors.length > 0 ? colors[0] : new ColorModel('Black', Constants.defaultRGBvalue, Constants.defaultRGBvalue, Constants.defaultRGBvalue)
  const [value, setValue] = useState(defaultColor.hex);

  const [selected, setSelected] = useState(defaultColor);
  
  const onChange = (newValue) => {
    setValue(newValue.hex);
  };

  const onSelect = (newValue) => {
    setSelected(newValue);
  };
  return (<div className='color-picker'>
    <InputHex value={value}></InputHex>
    <SliderDropDown selected={selected} onChange={onChange} onSelect={onSelect}></SliderDropDown>
    <SelectDropDown title={''} items={colors} onSelect={(item) => { setSelected(item); setValue(item.hex); }}></SelectDropDown>
  </div>);
}

export default ColorPicker;
