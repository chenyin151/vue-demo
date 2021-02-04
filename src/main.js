/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-14 16:15:48
 * @LastEditors: cy
 * @LastEditTime: 2021-02-01 15:59:44
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
