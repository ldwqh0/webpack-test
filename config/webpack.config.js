let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/main.js', // 程序的入口文件是什么
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出目标是什么
    filename: '[name].[hash].js' // 输出的文件名
  },
  module: {
    rules: [{
      // 对js进行语法格式检查
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      enforce: 'pre', // 表示这是一个预检查，配置参见 https://github.com/MoOx/eslint-loader
      // 要检查的路径
      include: [path.resolve(__dirname, '../src')]
    }, {
      // 对js文件进行转码
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /assets/]
    }, {
      // 加载css文件
      test: /\.css$/,
      // 我们对css文件进行剥离，必须写成这样
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    // 将js文件插入到宿主文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    }),
    // 拆分css文件的写法
    new ExtractTextPlugin({
      // 拆分css和js文件的路径的写法，这个路径代表的是，output.path之后的路径
      filename: 'static/styles/[name].[contenthash].css'
    }),
    // 复制静态资源文件
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }])
  ]
}
