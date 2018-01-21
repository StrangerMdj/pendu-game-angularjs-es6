const webpack 							= require('webpack');
	  path 								= require('path');
	  CleanWebpackPlugin 				= require('clean-webpack-plugin');
	  HtmlWebpackPlugin 				= require('html-webpack-plugin');
	  ExtractTextWebpackPlugin 			= require('extract-text-webpack-plugin');
	  OptimizeCssAssetsWebpackPlugin 	= require('optimize-css-assets-webpack-plugin');

module.exports =  {
	entry: {
		'app': './src/app.module.js',
		'vendor': './src/vendor.module.js'
	},
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['ng-annotate-loader', 'babel-loader']
			},
			{
				test: /\.(scss)$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
							{
								loader: "css-loader",
								options: {
									minimize: true
								}
							},
							{
								loader: "sass-loader"
							}
					]
				})
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			sourceMap: true
		}), 
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'libs/[name].bundle.js'
		}),
		new CleanWebpackPlugin('build'),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextWebpackPlugin('styles/styles.css'),
		new OptimizeCssAssetsWebpackPlugin()
	],
	devServer: {
		port: 3000,
		contentBase: './src/',
		historyApiFallback: true
	}
};