import showdown from 'showdown';

export const parsingFunction = (inputString) => {

    
    const converter = new showdown.Converter();
    const html = converter.makeHtml(inputString);

    return html;
}
