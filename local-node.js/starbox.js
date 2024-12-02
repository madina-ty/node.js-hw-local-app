function createStarBox(text){
    const textLength = text.length;
    const frameWidth = textLength + 6;

    const topBottomBorder = '*'.repeat(frameWidth);
    
    const emptyLine = '*   ';

    const textLine = `* ${text} *`;

    const starBox = `${topBottomBorder}\n${emptyLine}\n${textLine}\n${emptyLine}\n${topBottomBorder}`;

    return starBox;
}

module.exports = {createStarBox}