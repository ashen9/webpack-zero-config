// http://www.imooc.com/read/29/article/262     从零入门到工程化实践webpack
const webpack = require('webpack');
var path = require('path');
const DLL_MODE = false;
const ENTRY = {
	entry: {
		main: DLL_MODE ? './src/main.js' : './src/index.js',
	},
	output: {
		path: path.join(__dirname, DLL_MODE ? "dist/dll" : 'dist'),
		publicPath: './',
		filename: '[name].js'
	}
};
module.exports = {
	...ENTRY,
	mode: 'production',
	plugins: (() => {
		return DLL_MODE ? [
			new webpack.DllReferencePlugin({
				context: '.',
				manifest: path.join(__dirname, 'dist/dll/manifest.json')
			}),
		] : [];
	})()
};
