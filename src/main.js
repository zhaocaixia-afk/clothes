import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'

// 1.Toast插件
import toast from 'components/common/toast'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 2.Toast插件注册
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
