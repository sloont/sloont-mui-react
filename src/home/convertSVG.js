export const convertSVG = (svgid) => {
    const svg = document.getElementById(svgid);

    const xml = new XMLSerializer().serializeToString(svg);

    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64, ';

    return b64Start + svg64;
}