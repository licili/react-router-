const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './router2/index.js',
  // entry: './index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        use: {
          loader:'babel-loader'
        },
        // include:path.resolve(__dirname,'src')
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(eot|svg|jpg|png|woff|woff2|ttf|gif)$/,
        use:'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      hash: true,
      minify: {
        removeAttributeQuotes:true
      }
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    host: 'localhost',
    port:8080
  }
}