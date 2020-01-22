export default class ColorModel {
    constructor(name, r, g, b) {
        this.name = name;
        this.R = r;
        this.G = g;
        this.B = b;
    }

    get hex() {
        return this.fullFromRGBtoHEX(this.R, this.G, this.B);
    }

    singleRGBtoHEX(rgbNumber) {
        var hex = Number(rgbNumber).toString(16);
        return hex.length < 2 ? "0" + hex : hex;
    }

    fullFromRGBtoHEX(r, g, b) {
        let result = '#';
        result += this.singleRGBtoHEX(r) + this.singleRGBtoHEX(g) + this.singleRGBtoHEX(b);
        return result;
    }
}