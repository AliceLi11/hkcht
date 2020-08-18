import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/index.scss'
import 'normalize.css'
import 'icons'
Vue.use(ElementUI)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if(process.env.NODE_ENV === "production"){
  const {mockXHR} = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
