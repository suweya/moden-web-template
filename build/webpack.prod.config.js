var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config');

var webpackConfig = {
  output: {
    filename: config.assetsSubDirectory + '/js/[name].[chunkhash:9].js',
    path: config.assetsRoot,
    publicPath: config.dev.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.prod.env
    }),
    new ExtractTextPlugin({
      filename: config.assetsSubDirectory + '/css/[name].[contenthash:9].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: config.commonsChunkName,
      filename: config.assetsSubDirectory + '/js/[name].[chunkhash:9].js',
      minChunks: 3
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  devtool: 'source-map'
}

module.exports = webpackMerge(webpackBaseConfig, webpackConfig)
