// let merge = require('webpack-merge');
// let baseConfig = require('./webpack.config.base.js');

let path = require("path");
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let conf = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "./js/bundle.js"
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
				//exclude: "/node_modules/"
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
		}),
		new CleanWebpackPlugin()
	]
};

module.exports = (env, options) => {
	let production = options.mode === "produnction";

	conf.devtool = production ? "source-map" : "eval-sourcemap";

	return conf;
};
