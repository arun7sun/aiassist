var path = require('path');
var fs = require('fs');
const webpack = require('webpack')

var config = {
  entry: './src',
  output: {
    path: '/',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    hot: true,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader',
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules', 'config'],
    extensions: ['*', '.js', '.jsx', '.json', '.scss'],
  }
}
module.exports = config;
