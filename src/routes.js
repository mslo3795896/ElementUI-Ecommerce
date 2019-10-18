import Home from './views/Home.vue'
import Prod from './views/Prod.vue'
import Cart from './views/Cart.vue'

export const routes = [
  {
    path: '/elementUI-Ecommerce',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/prod',
    name: 'prod',
    component: Prod
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }

]
