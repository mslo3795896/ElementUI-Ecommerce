import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes,
  mode: 'history'
})

Vue.prototype.$formatCurrency = function (price) {
  return price.toString().replace(/\d(?=(\d{3})+$)/g, '$&,')
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
