/**
 * @file cjs entry point
 * @author XiaozhiSans
 * @version 1.1.0-beta.0
 * @date 2024-10-30
 * @description SMCF - Simple Minecraft Function
 */
const fs = require('fs');
try {
	fs.accessSync('./smcf.js/');
	// console.log('[LOG] smcf.js exists');
	const smcf = require('./smcf.js/!smcf.js');
	const files = fs.readdirSync('./smcf.js/');
	files.forEach(file => {
		const temp = file.split('.');
		if(!(file.startsWith('!')) && file.endsWith('.js'))
			smcf[`${temp[0] === 'smcf'? temp[1]: temp[0]}`] = require(`./smcf.js/${file}`);
		// console.log(`[LOG] loaded ${file}`);
	});;
	module.exports = smcf;
} catch(e) {
	// console.error('[!ERROR] ', e);
	return;
}
