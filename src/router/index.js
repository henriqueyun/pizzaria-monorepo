import Vue from 'vue'
import VueRouter from 'vue-router'

import ControlePedidos from '@/views/ControlePedidos'
import LoginView from '@/views/LoginView'
import AuthService from '@/services/AuthService'
import ListagemPizza from '@/views/ListagemPizza'
import ListagemBebida from '@/views/ListagemBebida'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'controle-pedidos',
    component: ControlePedidos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/pizzas',
    name: 'listagem-pizzas',
    component: ListagemPizza
  },
  {
    path: '/bebidas',
    name: 'listagem-bebidas',
    component: ListagemBebida
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('jwt')
    if (token) {
      
      const isUserAuthorized = await AuthService.authorize(token)

      if (!isUserAuthorized) {
        next({
          name: 'login'
        })
      } else {
        next()
      }
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router
