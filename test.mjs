import smcf from "./esm/index.min.mjs";
console.log(`
------------------------
  smcf.js mjs test
------------------------
`);
globalThis.put = str => console.log(str);
smcf.say('Hello, smcf.js!');
smcf.tp('XiaozhiSans')
smcf.tagMgr('ls')
