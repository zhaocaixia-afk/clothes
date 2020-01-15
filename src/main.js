import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'

// 延迟300
import FastClick from 'fastclick'
// 1.图片懒加载
import VueLazyLoad from 'vue-lazyload'
// 1.Toast插件
import toast from 'components/common/toast'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 2.Toast插件注册
Vue.use(toast)
// 延迟300
FastClick.attach(document.body)
// 图片懒加载
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
