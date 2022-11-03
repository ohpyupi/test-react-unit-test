import { JSDOM } from 'jsdom';

const DEFAULT_HTML = '<html><body></body></html>';

const { window }  = new JSDOM(DEFAULT_HTML);
const { document } = window; 

global.window = window;
global.document = document;
global.navigator = window.navigator;