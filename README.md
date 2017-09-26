# moden web template

## HTML

- 支持`.pug`

## JS

- ES6 
- babel-ployfill
- babel-preset-env

## CSS

- 支持 css autoprefixer 

## BUILD

- webpack
- webpack-dev-server
- 热更新
- hash


## TODO

- [ ] CSS Module
- [ ] test
- [ ] proxy mock
- [ ] sass
- [ ] stylus

## babel-preset-env@next (2.0.0-beta)

> 在 babel-preset-env 的官方说明中提到这是一款可以“自动”决定加载哪些插件和 polyfill 的 preset

- target
  - 通过 targets 指定需要兼容的浏览器类型和版本（采用 ai/browserslist 查询语法 ）
  - 换句话说，你可以通过指定更高的浏览器版本来减少插件和 polyfill 的代码量，并且直接使用原生 ES6 的新特性，特别适合 Electron 及移动端 App 或者那些已指定了浏览器的内网应用程序。例如，将浏览器设为 Chrome 较高的版本，Promise、Map、Set 等内建类均不会被 polyfill，而同时 class 等新语法也不会被 Babel 转译，转而使用 V8 自带的 ES6 Class。

- useBuiltIns 
  - 当 useBuiltIns 设置为 usage 时，Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。

> [Ref](https://zhuanlan.zhihu.com/p/29506685?utm_source=com.daimajia.gold&utm_medium=social)