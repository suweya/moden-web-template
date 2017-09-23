var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config/index');

var webpackConfig = {
  output: {
    filename: config.assetsSubDirectory + '/js/[name].js',
    path: config.assetsRoot,
    publicPath: config.dev.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new ExtractTextPlugin({
      filename: config.assetsSubDirectory + '/css/[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: config.commonsChunkName,
      filename: config.assetsSubDirectory + '/js/[name].js',
      minChunks: 3
    })
  ],
  devServer: {
    clientLogLevel: 'none',
    noInfo: true,
    overlay: true
  },
  devtool: 'cheap-module-eval-source-map'
}

module.exports = webpackMerge(webpackBaseConfig, webpackConfig)
