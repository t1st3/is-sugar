'use strict';

var pify = require('pify');

var f = function (cb) {
	cb(null, (process.env.DESKTOP_SESSION === 'sugar'));
};

module.exports = pify(f);
