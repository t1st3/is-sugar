'use strict';

module.exports = new Promise((resolve, reject) => {
	if (process.env.DESKTOP_SESSION === 'sugar') {
		resolve(true);
	} else {
		resolve(false);
	}

	reject(new Error());
});
