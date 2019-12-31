import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Clipboard from 'clipboard'
import Axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Clipboard,
  Axios,

  render: h => h(App)
}).$mount('#app')

Vue.use(Clipboard)
