/** @format */

const path = require('path');

module.exports = {
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	sassOptions: {
		includePaths: [path.resolve(__dirname, './pages')],
	},
};
