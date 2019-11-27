const webpack = require('webpack');
const path = require('path');
module.exports = {
	entry: {
		bundle: [
			'vue',
			'vuex'
		],
	},
	output: {
		path: __dirname +'/dist/dll',
		filename: '[name].js',
		library: '[name]_library'
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, 'dist/dll/manifest.json'), // 文件的输出路径，这个文件会用于后续的业务代码打包；
			name: '[name]_library',  // dll 暴露的对象名，要跟output.library保持一致;
			context: __dirname
		})
	]
};
