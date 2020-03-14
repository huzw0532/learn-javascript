var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js', //入口文件
  output: {
    path: __dirname,//出口路径
    filename: 'js/[id]-[name]-[hash].js'//出口名称
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index-[hash].html',//生成的html文件名称为'index.html'
      template:'template/template.html'//模板文件为'template.html'
    })
  ]
}