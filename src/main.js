import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 axios
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 配置axios默认路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3008'
// 挂载到Vue的原型上
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
