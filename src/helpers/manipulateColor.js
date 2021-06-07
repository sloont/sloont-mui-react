import Color from 'color';
import hexRgb from 'hex-rgb';

export const lightenColor = (colorAsHexString) => {
    
    return formatColorInput(colorAsHexString).lighten(0.7).hex();
    
    
};

export const saturateColor = (colorAsHexString) => {

    return formatColorInput(colorAsHexString).saturate(0.2).hex();
};

const formatColorInput = (colorAsHexString) => {
    return Color(hexRgb(colorAsHexString, {format: 'array'}));
    
}