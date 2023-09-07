import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import CardapioView from '../views/CardapioView.vue'
import CadastrarEnderecoView from '../views/CadastrarEnderecoView.vue'
import ProdutoView from '../views/ProdutoView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'
import RastrearPedidoView from '../views/RastrearPedidoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WelcomeView
  },
  {
    path: '/cardapio',
    component: CardapioView
  },
  {
    path: '/cadastrar_endereco',
    component: CadastrarEnderecoView
  },
  {
    path: '/:tipo_produto/:id/:action',
    component: ProdutoView
  },
  {
    path: '/carrinho',
    component: CarrinhoView
  },
  {
    path: '/rastrear',
    component: RastrearPedidoView
  },
  {
    // will match everything
    path: '*',
    component: NotFoundView
  }
]

const router = new VueRouter({
  routes
})

export default router
