<!--
 * @Author: cuidezhu 4206784@qq.com
 * @Date: 2022-10-12 14:24:04
 * @LastEditors: cuidezhu 4206784@qq.com
 * @LastEditTime: 2022-10-14 17:06:08
 * @FilePath: \my-vue-cli\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 从零开始，基于 Webpack5 搭建一个 Vue-Cli

## 1、建一个文件夹

## 2、初始化npm

## 3、webpack、webpack-cli
    `npm i webpack webpack-cli -D`

## 4、src、public 
* 这两个文件夹，前者用来放置项目主要代码，后者用来放项目公用静态资源
* `public/index.html`
* `src/main.js`
  
## 5、入口文件
* 刚刚的main.js就是我们的入口文件，在根目录下新建webpack.config.js
  
## 6、配置打包命令
* 到package.json里配置打包命令：`"build": "webpack"`

## 7、打包html
`npm i html-webpack-plugin -D`

## 8、打包CSS
`npm i sass sass-loader sass-resources-loader mini-css-extract-plugin -D`

## 9、打包图片
* webpack5中已经废弃了url-loader，打包图片可以使用`asset-module`

## 10、配置babel
`
npm i
@babel/core babel-loader
@babel/preset-env
@babel/plugin-transform-runtime
-D
`
* 在webpack.config.js中去针对js进行操
* 配置babel转换的规则，所以需要在根目录下创建babel.config.js

## 11、打包Vue
* vue和vue-template-compiler版本需要一致
* `npm i 
vue@2.6.14 vue-template-compiler@2.6.14
vue-loader@15.9.8 @vue/babel-preset-jsx
-D`

## 12、配置路径别名 alia

## 13、webpack-dev-server
`npm i webpack-dev-server -D`
* webpack.config.js中配置devServer
* 到package.json中配置一下启动命令

## 14、区分环境
* webpack.base.js
* webpack.dev.js
* webpack.prod.js
* `npm i webpack-merge -D`
  
## 15、构建进度条
`npm i progress-bar-webpack-plugin -D`

## 16、source-map
* development：`eval-cheap-module-source-map` 能具体定位到源码位置和源码展示，适合开发模式，体积较小
* production：`nosources-source-map` 只能定位源码位置，不能源码展示，体积较小，适合生产模式

## 17、环境变量
* 配置devlopment、production这两个环境的环境变量

## 18、代码、规范


