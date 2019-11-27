const webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: {
		main: './src/main.js',
	},
	output: {
		path: path.join(__dirname, "dist/dll"),
		publicPath: './',
		filename: '[name].js'
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: path.join(__dirname, 'dist/dll/manifest.json')
		}),
	]
};
