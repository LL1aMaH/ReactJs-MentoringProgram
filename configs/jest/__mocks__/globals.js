const fetch = require('node-fetch');

global.fetch = fetch;

global.console.error = () => {}
global.console.warn = () => {}

