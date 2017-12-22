const merge = require('webpack-merge')
const webpack = require('webpack')
const basicConfig = require('./webpack.config')
// 在dev-server模式下，不能使用这个插件
module.exports = merge(basicConfig, {
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })]
})
