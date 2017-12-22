const merge = require('webpack-merge')
const basicConfig = require('./webpack.config')
const path = require('path')
module.exports = merge(basicConfig, {
  devServer: {
    port: 8080,
    hot: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist'),
    overlay: {
      warnings: false,
      errors: true
    }
  }
})
