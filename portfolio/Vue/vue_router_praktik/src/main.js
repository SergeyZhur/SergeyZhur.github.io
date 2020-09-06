import Vue from 'vue'
import App from './App.vue'
// js files
import router from './routes'


import './assets/scss/main.scss'
// scss files


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
