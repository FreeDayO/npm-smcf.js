const smcf = require('./index.min.cjs');
console.log(`
------------------------
  smcf.js cjs test
------------------------
`);
globalThis.put = str => console.log(str);
smcf.say('Hello, smcf.js!');
