if(typeof window !== 'object') {
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
} else {
	console.warn('[!WARN] browser mode (beta)');
	
	const smcf = require('./smcf.js/!smcf.js');
	const files = require('./modules.json');
	files.forEach(file => {
		const temp = file.split('.');
		if(!(file.startsWith('!')) && file.endsWith('.js'))
			smcf[`${temp[0] === 'smcf'? temp[1]: temp[0]}`] = require(`./smcf.js/${file}`);
		console.log(`[LOG] loaded ${file}`);
	});;
	module.exports = smcf;
}
