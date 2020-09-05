import Vue from 'vue'
import App from './App.vue'
// js files



import './assets/scss/main.scss'
// scss files


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
