var path = require('path');
var fs = require('fs')

// web entry
var entry = require('./entry');
// src folder
var srcDir = path.resolve(__dirname, '../../src');

// 首页结构特殊处理
var entryConfigs = [
  {
    entryName: 'index/index',
    entry: path.resolve(srcDir, 'index/index.js'),
    filename: 'index.pug',
    filemark: 'index',
    template: path.resolve(srcDir, 'index.pug')
  }
];

// 获取SRC下的目录名称
var EXCLUDE_FOLDER = ['lib', 'index'];
var srcFolders = fs.readdirSync(srcDir).filter(function (folderName) {
  return EXCLUDE_FOLDER.indexOf(folderName) === -1 && fs.statSync(path.resolve(srcDir, folderName)).isDirectory()
})

// 遍历目录生成config添加至entryConfigs
srcFolders.forEach(entryFactory);

function entryFactory(folderName) {
  var fileMark = findConfigEntryName(folderName);
  var htmlFileName = fileMark + '.pug';
  var jsFilename = fileMark + '.js';
  var htmlFileNameSuffix = fileMark + '.html';

  var allFiles = fs.readdirSync(path.resolve(srcDir, folderName));
  if ((allFiles.indexOf(htmlFileName) === -1 && allFiles.indexOf(htmlFileNameSuffix) === -1 ) || allFiles.indexOf(jsFilename) === -1) {
    return;
  }

  if (allFiles.indexOf(htmlFileName) === -1) {
    htmlFileName = htmlFileNameSuffix;
  }

  entryConfigs.push({
    entryName: folderName + '/' + fileMark,
    entry: path.resolve(srcDir, folderName, jsFilename),
    filename: folderName + '/' + htmlFileName,
    filemark: folderName + '/' + fileMark,
    template: path.resolve(srcDir, folderName + '/' + htmlFileName)
  });

  var subFolders = allFiles.filter(function (file) {
    return fs.statSync(path.resolve(srcDir, folderName + '/' + file)).isDirectory();
  }).map(function (name) {
    return folderName + '/' + name;
  });

  if (subFolders.length) {
    subFolders.forEach(entryFactory); // recursion    
  }
}

/**
 * 匹配自定义入口文件名
 * 默认index
 * @param {*} folderName
 */
function findConfigEntryName(folderName) {
  var length = entry.length
  for (var i = 0; i < length; i++) {
    if (folderName === entry[i].dir) {
      return entry[i].name;
    }
  }
  return 'index';
}

module.exports = {
  entry: entryConfigs,
  assetsRoot: path.resolve(__dirname, '../../dist'),
  assetsSubDirectory: 'static',
  commonsChunkName: ['app', 'vendor', 'manifest'],
  dev: {
    env: require('./env/dev'),
    assetsPublicPath: '/'
  },
  prod: {
    env: require('./env/prod'),
    // 可配置 CDN
    assetsPublicPath: '/'
  }
}
