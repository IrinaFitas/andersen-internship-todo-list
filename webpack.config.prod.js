let path = require("path");
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let conf = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "./js/bundle.js"
	},
	devServer: {
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
        		use: ExtractTextPlugin.extract({
          				fallback: "style-loader",
          				use: "css-loader"
					})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
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
