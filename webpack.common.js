const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx', //打包文件入口
	output: {
		//打包后文件名和路径
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/i,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.module\.less$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]_[hash:base64:5]',
							},
						},
					},
					'less-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource', //内置图片loader
				// limit: 1024 //1024 以下的图片会用data-url形式保存在代码中，大于1024的图片会保存图片文件
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react typescript app',
			template: './src/index.html',
		}),
	],
	resolve: {
		// 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
		// 其中 __dirname 表示当前工作目录，也就是项目根目录
		modules: [path.resolve(__dirname, 'node_modules')],
		extensions: ['.tsx', '.ts', '.js'], //导入文件若没有后缀时按这个顺序去找文件
	},
}
