import Vue from 'vue'
import VueRouter from 'vue-router'

import ControlePedidos from '@/views/ControlePedidos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'controle-pedidos',
    component: ControlePedidos
  }
]

const router = new VueRouter({
  routes
})

export default router
