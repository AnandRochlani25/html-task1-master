const { JSDOM } = require('jsdom');

const setupDom = async (html, isFile) => {
    let dom;
    if(isFile) dom = await JSDOM.fromFile(html)
    else dom = new JSDOM(html);
    global.window = dom.window;
    global.document = dom.window.document;
};

module.exports = setupDom;