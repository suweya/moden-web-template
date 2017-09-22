var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

var entry = {};
config.entry.forEach(function (item) {
  entry[item.entryName] = item.entry;
});

entry.vendor = ['jquery', 'normalize.css'];

var webpackConfig = {
  entry: entry,
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  },
  module: {
    
  }
}