const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const mode = process.env.ENV || 'development';

module.exports = {
	mode,
	entry: join(__dirname, 'src', 'index.js'),
	output: {
		path: join(__dirname, 'build'),
		filename: 'index.bundled.js',
	},
	devServer: {
		port: 4000,
		hot: true,
		open: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			favicon: false,
			showErrors: true,
			cache: true,
			template: join(__dirname, 'src', 'index.html'),
		}),
	],
};
