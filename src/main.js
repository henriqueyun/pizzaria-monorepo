import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
