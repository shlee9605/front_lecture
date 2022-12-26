import Vue from 'vue'
import router from './routes'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
