import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/stylesheets/app.scss'
import '@/components.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
