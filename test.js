const smcf = require('./index.js');
globalThis.put = str => console.log(str);
smcf.say('Hello, smcf.js!');
