import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import CardapioView from '../views/CardapioView.vue'
import CadastrarEnderecoView from '../views/CadastrarEnderecoView.vue'
import AdicionarPizzaView from '../views/AdicionarPizzaView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'

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
    path: '/adicionar_pizza/:id',
    component: AdicionarPizzaView
  },
  {
    path: '/carrinho',
    component: CarrinhoView
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
