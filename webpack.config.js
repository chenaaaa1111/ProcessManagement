const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    output: {
        // chunkhash hash的区别：hash是所有输出文件共用一个hash，chunkhash是不同文件是不同的hash，可以用这个做缓存
        // 是入口文件的输出名字
        filename: '[name].[hash:4].bundle.js',
        // 输出绝对路径
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin()
      ]
}