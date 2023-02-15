const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development', //开发模式
    devtool: 'source-map', //source-map类型，开发环境，生产环境用none //官方推荐eval-cheap-module-source-map
    devServer: {
        hot: true, //热更新
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
})