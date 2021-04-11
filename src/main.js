import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

{/* <script src="//unpkg.com/element-ui@2.15.1/lib/index.js"></script> */}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
