var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

var srcDir = path.resolve(__dirname, '../src');
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = {};
var plugins = [];
config.entry.forEach(function (item) {
  entry[item.entryName] = item.entry;

  plugins.push(new HtmlWebpackPlugin({
    filename: item.filemark + '.html',
    template: item.template,
    chunks: ['manifest', 'vendor', 'app', item.entryName],
    env: PRODUCTION ? config.prod.env.NODE_ENV : config.dev.env.NODE_ENV
  }));
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
    noParse: /jquery/,
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: PRODUCTION,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        include: [srcDir]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: [srcDir]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: config.assetsSubDirectory + '/img/[name].[hash:9].[ext]',
              publicPath: PRODUCTION ? config.prod.assetsPublicPath : config.dev.assetsPublicPath
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: config.assetsSubDirectory + '/fonts/[name].[hash:9].[ext]',
              publicPath: PRODUCTION ? config.prod.assetsPublicPath : config.dev.assetsPublicPath
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
    }),
    new webpack.ProgressPlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    })
  ].concat(plugins)
};

module.exports = webpackConfig
