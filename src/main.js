import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './plugins/element.js'
import './assets/css/global.css'



import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL ='http://119.23.53.78:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false


new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
