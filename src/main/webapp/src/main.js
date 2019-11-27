import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// axios.defaults.baseURL=process.env.NODE_ENV==="development"?"127.0.0.1:8080":"";
axios.defaults.baseURL=process.env.NODE_ENV==="127.0.0.1:8080";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
console.log("当前环境",process.env.NODE_ENV);

new Vue({
  render: h => h(App),
}).$mount('#app');
