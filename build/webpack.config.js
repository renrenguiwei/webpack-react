const path = require('path')
const HTMLPlugin = require('html-webpack-plugin') // jsx注入展示成html插件

module.exports = {
  entry:{
    app:path.join(__dirname,'../client/app.js') // 打包入口
  },
  output:{
    filename:'[name].[hash].js',  // 打包文件名
    path:path.join(__dirname,'../dist'),  // 打包至文件夹
    publicPath:''  // 打包文件夹路径
  },
  module:{
    rules:[
      {
        test:/.jsx$/, // babel解析jsx语法
        loader:'babel-loader'
      },
      {
        test:/.js$/,  // babel解析js中的jsx
        loader:'babel-loader',
        exclude:[
          path.join(__dirname,'../node_modules')  // 忽略node_modules已经编译过的js
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin()  // html注入代码
  ]
}