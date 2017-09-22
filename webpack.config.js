var rimraf = require('rimraf');

var webpackConfig = process.env.NODE_ENV === 'development' ?
  require('./build/webpack.dev.config') : require('./build/webpack.prod.config')

if (process.env.NODE_ENV !== 'development') {
  rimraf('./dist', function(err) {
    if (err) throw err
  })
}

module.exports = webpackConfig
