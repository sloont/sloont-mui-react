import Color from 'color';
import hexRgb from 'hex-rgb';

export const lightenColor = (colorAsHexString) => {
    
    let color = Color(hexRgb(colorAsHexString, {format: 'array'}));
    return color.lighten(0.7).hex();
    
}