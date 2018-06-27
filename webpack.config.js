var path = require('path');

module.exports = {
	entry: path.join(__dirname, './index.js'),
	output: {
    	filename: 'bundle.js',
	    path: path.join(__dirname, ''),
	}
};