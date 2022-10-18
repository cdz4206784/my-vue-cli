/*
 * @Author: cuidezhu 4206784@qq.com
 * @Date: 2022-10-12 18:52:03
 * @LastEditors: cuidezhu 4206784@qq.com
 * @LastEditTime: 2022-10-13 18:28:41
 * @FilePath: \my-vue-cli\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    presets: [
        // 配置规则
        "@babel/preset-env",

        // 支持vue中的jsx语法
        '@vue/babel-preset-jsx'
    ],
    // 配置插件
    plugins: ["@babel/plugin-transform-runtime"]
}