import ColorModel from "./models/color.model";

export default class Constants {
    static get minRGB() {
        return 0;
    }
    static get maxRGB() {
        return 255;
    }
    static get RGBstep() {
        return 1;
    }
    static get defaultRGBvalue() {
        return 0;
    }
    static get ColorSelectValues() {
        return [
            new ColorModel('Red', 255, 0, 0),
            new ColorModel('Yellow', 255, 255, 0),
            new ColorModel('Green', 0, 128, 0),
            new ColorModel('Blue', 0, 0, 255),
        ]
    }
}