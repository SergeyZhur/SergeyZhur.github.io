import Vue from 'vue'
import App from './App.vue'
// js files
import router from './routes'
import store from './store'

import './assets/scss/main.scss'
// scss files


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
