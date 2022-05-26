import Vue from 'vue'
import VueRouter from 'vue-router'

import ControlePedidos from '@/views/ControlePedidos'
import LoginView from '@/views/LoginView'
import AuthService from '@/services/AuthService'

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
