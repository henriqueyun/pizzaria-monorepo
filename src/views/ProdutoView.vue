<template>
  <section class="visualizacao-produto">
    <header>
      <h1>{{ obterPalavraComPrimeiraLetraMaiuscula(action)}} {{ obterPalavraComPrimeiraLetraMaiuscula(produto.tipo) }}</h1>
    </header>
    <main class="simple-container">
      <label v-if="produto.tipo" for="nomeProduto">{{ ['pizza', 'esfiha'].includes(produto.tipo.toLowerCase()) ? 'Sabor:' : 'Nome:' }}</label><br/>
      <input type="text" disabled name="nomeProduto" :value="produto.nome" placeholder="Carregando informações..."/>
      <label for="precoProduto">Preço:</label><br/>
      <input type="text" disabled name="precoProduto" :value="produto.preco" placeholder="Carregando informações..."/>
      <label for="qtd">Quantidade:</label><br/>
      <input v-model="qtd" type="number" name="qtd" min="0" max="99" value="1"/><br/>
      <span @click="adicionarItem()">Adicionar ao carrinho</span>
    </main>
  </section>
</template>

<script>
import PizzaService from '../services/PizzaService'
import BebidaService from '../services/BebidaService'

export default {
  data () {
    return {
      produto: {
        nome: '',
        tipo: ''
      },
      qtd: 1,
      itemPedido: {},
      action: this.$route.params.action,
      acaoEncontrada: true
    }
  },

  mounted() {
    this.carregarDados()
    this.validarItensPedido()
  },

  methods: {
    // cuida do load da interface a depender do tipo de produto e ação (adicionar, editar etc.)
    carregarDados () {
      const metodosCarregamento = {
        adicionar: async () => {
          this.produto = await this.carregarProduto(this.$route.params.tipo_produto)
        },
        editar: () => {
          alert('Não implementado ainda')
        }
      }
      if (this.$route.params.action in metodosCarregamento) {
        metodosCarregamento[this.$route.params.action]()
      } else {
        alert('Ação não encontrada, volte à página inicial e tente novamente.')
        window.location = '/'
      }
    },

    carregarProduto (tipoProduto) {
      const produtoId = this.$route.params.id
      return {
        pizza () {
          return PizzaService.get(produtoId)
        },

        bebida () {
          return BebidaService.get(produtoId)
        }
      }[tipoProduto]()
    },

    obterPalavraComPrimeiraLetraMaiuscula(palavra) {
      if (!palavra) {
        return ''
      }
      return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    },

    adicionarItem() {
      this.validarItensPedido()
      let itensPedido = localStorage.getItem('itensPedido')
      itensPedido = JSON.parse(itensPedido)

      if (this.$route.params.tipo_produto == 'pizza') {
        
        const pizza = { pizzaId: this.produto.id, produto: this.produto, qtd: this.qtd }

        if (itensPedido.pizzas.some(itemPizza => itemPizza.pizzaId == pizza.pizzaId)) {
          itensPedido.pizzas.map(itemPizza => {
            console.log(itemPizza.pizzaId)
            if (itemPizza.pizzaId == pizza.pizzaId) {
              itemPizza.qtd += pizza.qtd
            }
            return itemPizza
          })
        } else {
          console.log('not same id', pizza)
          itensPedido.pizzas.push(pizza)
        }

        localStorage.setItem('itensPedido', JSON.stringify(itensPedido))
        alert('Pizza adicionada ao carrinho!')
        this.$router.back()
      } else if (this.$route.params.tipo_produto == 'bebida') {
        const bebida = { bebidaId: this.produto.id, produto: this.produto, qtd: this.qtd }
        console.log(itensPedido)
        itensPedido.bebidas.push(bebida)
        localStorage.setItem('itensPedido', JSON.stringify(itensPedido))
        alert ('Bebida adicionada ao carrinho!')
        this.$router.back()
      } else {
        alert('Não identificamos esse produto :/')
      }
      localStorage.setItem('itensPedido', JSON.stringify(itensPedido))
    },

    validarItensPedido () {
      let itensPedido = localStorage.getItem('itensPedido')
      if (!itensPedido) {
        itensPedido = {}
        itensPedido.pizzas = []
        itensPedido.bebidas = []
        localStorage.setItem('itensPedido', JSON.stringify(itensPedido))
      }
    }
  }
}
</script>

<style>
  header h1 {
      font-size: xxx-large;
      margin-top: 50px;
      text-align: center;
  }
  
  .visualizacao-produto {
    font-size: x-large;
  }

  .visualizacao-produto input {
    font-size: large;
    padding: 5px;
    width: 100%;
  }

  .visualizacao-produto span {
    padding: 5px;
    font-size: x-large;
    color: white;
    background-color: black;
    cursor: pointer;
    float: right;
  }

  .visualizacao-produto input[type="number"] {
    width: min-content;
  }

</style>