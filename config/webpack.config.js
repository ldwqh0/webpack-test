let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, '../src')]
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /assets/]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    }),
    new ExtractTextPlugin({
      // 拆分css和js文件的路径的写法，这个路径代表的是，output.path之后的路径
      filename: 'static/styles/[name].[contenthash].css'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }])
  ]
}
