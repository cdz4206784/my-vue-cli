/*
 * @Author: cuidezhu 4206784@qq.com
 * @Date: 2022-10-12 14:17:03
 * @LastEditors: cuidezhu 4206784@qq.com
 * @LastEditTime: 2022-10-13 18:32:07
 * @FilePath: \my-vue-cli\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import './styles/index.scss'

// import { add } from './tools/add'

// console.log(add(1, 2));
// console.log('我是main.js');

import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: (h) => h(App)
}).$mount('#app')
