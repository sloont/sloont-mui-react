import { convertSVG } from "./convertSVG";

///hardcoded values: 
export const skillValues = {
    'javascript-icon': 9,
    'github-icon': 5,
    'css-icon': 6,
    'html-icon': 7,
    'chrome-icon': 4,
    'bash-icon': 3,
    'csharp-icon': 2,
    'express-icon': 3,
    'git-icon': 4,
    'java-icon': 5,
    'mui-icon': 6,
    'mongo-icon': 2,
    'node-icon': 5,
    'npm-icon': 4,
    'python-icon': 3,
    'react-icon': 6,
    'redux-icon': 6,
    'ubuntu-icon': 3,
    'visualstudio-icon': 4,
    'windows-icon': 4,
}

export const orbInformation = {}

export const generateOrbInformation = () => {

    const svgDiv = document.getElementById("svgs").children;
    const svgIdArray = [];
    
    for (let svg of svgDiv) {
            
         svgIdArray.push(svg.id);
            
    };
    
    svgIdArray.forEach((svgid) => {
        orbInformation[svgid] = {
            svgID: svgid,
            image: new Image(),
            skill: skillValues[svgid],
        }
    
        orbInformation[svgid].image.src = convertSVG(svgid);
    
        
    });

}
