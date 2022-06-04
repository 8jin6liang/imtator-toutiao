import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共样式
import './styles/index.less'
// 按需引入vant
import './config/vant.config.js'

// 关闭生产提示
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
