import Vue from 'vue'
import VueRouter from 'vue-router'

import ControlePedidos from '@/views/ControlePedidos'
import ListagemProduto from '@/views/ListagemProduto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'controle-pedidos',
    component: ControlePedidos
  },
  {
    path: '/listagem',
    name: 'listagem-produto',
    component: ListagemProduto
  }
]

const router = new VueRouter({
  routes
})

export default router
