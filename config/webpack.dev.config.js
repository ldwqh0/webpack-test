const merge = require('webpack-merge')
const basicConfig = require('./webpack.config')
const webpack = require('webpack')
module.exports = merge(basicConfig, {

  // 开发服务器配置
  devServer: {
    port: 8080, // 监听端口
    hot: true, // 是否启用服务器模块热加载，这个必须和模块热加载插件配合使用
    publicPath: '/', // 发布路径是什么，也就是浏览器后面访问的路径
    overlay: { // 是否显示覆盖层
      warnings: false, // 是否显示警告覆盖层
      errors: true // 是否显示错误覆盖层，如果要显示es-lint的语法检查错误，必须设置这里为true
    }
  },
  plugins: [
    // 启用模块热加载插件
    new webpack.HotModuleReplacementPlugin()
  ]
})
