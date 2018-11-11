var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 多入口文件演示
 */
module.exports = {

  //指定入口文件
  entry: {
    index: path.resolve(__dirname, './src/main.js')
  },
  //输出
  output: {
    //输出的文件名，[name]会变为在入口配置中属性名
    filename: 'js/[name].bundle.js',
    //输出的路径
    path: path.resolve(__dirname, './dist'),
    publicPath:'/'
  },
  //配置打包规则
  module: {
    rules: [
      {
        //配置css的处理规则
        test: /\.(css)$/, //配置处理文件的后缀名
        //use的每一个元素，可以是对象，可以是字符串
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')({
                  browsers: ["> 5%", "last 2 versions"]
                })]
            }
          }

        ], //配置处理的loader
      }, {
        test: /\.(html)$/,
        use: ['html-loader']
      }, 
      //图片文件处理
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[ext]'
            }
          }
        ]
      },
      //字体文件处理
      {
				test: /\.(eot|svg|ttf|woff|woff2)\w*/,
				use:[
					{
						loader: 'url-loader',
						options:{
							limit:10 * 1024,
						}
					}
				]
			},
    ]
  },

  //插件配置
  plugins: [
    //提取css文件
    new MiniCssExtractPlugin({filename: "css/[name].css", chunkFilename: "[id].css"}),
    //生成html文件
    new HtmlWebpackPlugin({
      filename: 'index.html', chunks: ['index'], //配置需要引入的入口
      template: path.resolve(__dirname, './src/views/index.html'), //指定生成页面的模板
    })
  ]
}