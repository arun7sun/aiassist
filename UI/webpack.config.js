var path = require('path');
var fs = require('fs');
const {
  resolve
} = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var config = {
  context: resolve(__dirname, './src'),
  entry: 'index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    hot: true,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000
    }),
    new HtmlWebpackPlugin({
      template: '../index.html',
      filename: '../dist/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 15
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     hoist_funs: true,
    //     sequences: true,
    //     dead_code: true,
    //     conditionals: true,
    //     booleans: true,
    //     unused: true,
    //     if_return: true,
    //     join_vars: true,
    //     drop_console: false,
    //     comparisons: true,
    //     warnings: true,
    //     loops: true,
    //     drop_debugger: true,
    //   },
    // }),
    // new OptimizeCssAssetsPlugin(),
  ],
  devtool: 'source-map',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
    extensions: ['*', '.js', '.jsx', '.json', '.css' ],
  }
}
module.exports = config;