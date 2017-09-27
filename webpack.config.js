var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");

//这里是两个__,  指向当前执行脚本所在的目录
var ROOT_PATH = path.resolve(__dirname);   
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'app.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'build.js'
	},
	devTool: 'eval-source-map',
	// 本地服务器设置
	devServer: {
		historyApiFallback: true,
		hot: true,
		// 源文件改变时会自动刷新页面
		inline: true,
		progress: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: APP_PATH,
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				// APP_PATH目录下的文件也需要处理
				include: APP_PATH
			},
			{
				test: /\.scss?$/,
				loaders: ['style', 'css', 'sass']
			}
		],
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	plugins: [
		// 自动生成HTML文件，无需手动创建
		new HtmlwebpackPlugin({
			title: "Deskmark app"
		}),

		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		})
	]
}