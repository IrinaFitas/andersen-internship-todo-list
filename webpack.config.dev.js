let path = require("path");
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let conf = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "./js/bundle.[hash:8].js"
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./"),
		watchContentBase: true,
		inline: true,
		hot: true,
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: path.join(__dirname, 'node_modules')
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: './index.html',
		})
	]
};

module.exports = (env, options) => {
	let production = options.mode === "produnction";
	
	conf.devtool = production ? "source-map" : "eval-sourcemap";
	
	return conf;
};
