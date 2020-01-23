import React, { useState } from 'react';
import './color-picker.css';
import InputHex from '../InputHex/input-hex'
import SelectDropDown from '../SelectDropDown/select-drop-down';
import SliderDropDown from '../SliderDropDown/slider-drop-down';
import ColorModel from '../../models/color.model';
import Constants from '../../constants';

function ColorPicker(props) {

  const [colors] = useState(Constants.ColorSelectValues);
  const defaultColor = colors.length > 0 ? colors[0] : new ColorModel('Black', Constants.defaultRGBvalue, Constants.defaultRGBvalue, Constants.defaultRGBvalue)
  const [value, setValue] = useState(defaultColor.hex);

  const [selected, setSelected] = useState(defaultColor);

  const [selectDropDownIsOpen, setSelectDropDownOpen] = useState(false);
  const [sliderDropDownIsOpen, setSliderDropDownOpen] = useState(false);

  const onChange = (newValue) => {
    setValue(newValue.hex);
  };

  const onSelect = (newValue) => {
    setSelected(newValue);
    setValue(newValue.hex);
  };
  return (
    <div className='color-picker'>
      <InputHex value={value}></InputHex>
      <SliderDropDown selected={selected}
        sliderIsOpen={sliderDropDownIsOpen}
        onSliderDropDownOpen={() => {
          setSelectDropDownOpen(false);
          setSliderDropDownOpen(true);
        }}
        onChange={onChange} onSelect={(item) => onSelect(item)}>
      </SliderDropDown>
      <SelectDropDown selectIsOpen={selectDropDownIsOpen}
        onSelectDropDownOpen={() => {
          setSliderDropDownOpen(false);
          setSelectDropDownOpen(true);
        }}
        items={colors}
        onSelect={(item) => onSelect(item)}></SelectDropDown>
    </div>);
}

export default ColorPicker;
